const express = require('express');
const db = require('./db');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const jwt = require('jsonwebtoken'); // Importar JWT

const app = express();
app.use(express.json());

// Middleware de logs para diagnóstico
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

const JWT_SECRET = process.env.JWT_SECRET || 'secreto_super_seguro';

// Middleware de autenticación simple
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

const swaggerSpec = swaggerJsdoc({
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Zurtia',
            version: '1.0.0',
            description: 'API para sistema de Pickeo Zurtia'
        }
    },
    apis: ['./index.js']
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.post('/login', async (req, res) => {
    try {
        const { correo, password } = req.body;
        if (!correo || !password) {
            return res.status(400).json({ error: 'Correo y contraseña son requeridos' });
        }
        const result = await db.query('SELECT * FROM usuarios WHERE correo = $1', [correo]);
        const usuario = result.rows[0];
        if (!usuario) {
            return res.status(401).json({ error: 'Correo no registrado' });
        }
        if (usuario.password !== password) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, JWT_SECRET, { expiresIn: '1h' });
        
        res.json({
            token,
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                correo: usuario.correo,
                rol: usuario.rol
            }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Endpoint de usuarios
app.get('/usuarios', authenticateToken, async (req, res) => {
    console.log('--- ENTRANDO A /usuarios ---');
    try {
        const { rol } = req.query;
        let query = 'SELECT id, nombre, correo, rol, disponible FROM usuarios';
        let params = [];
        if (rol) {
            query += ' WHERE rol = $1';
            params.push(rol);
        }
        const result = await db.query(query, params);
        res.json(result.rows);
    } catch (err) {
        console.error('Error en /usuarios:', err);
        res.status(500).json({ error: err.message });
    }
});
// ─── HU #8: Productos con ubicación ──────────────────────────────────────────
/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Lista productos con ubicación exacta (pasillo y góndola)
 *     responses:
 *       200:
 *         description: Lista de productos ordenados por categoría y pasillo
 *       404:
 *         description: No hay productos
 */
app.get('/productos', async (req, res) => {
    try {
        const result = await db.query(`
            SELECT id, nombre, categoria, pasillo, gondola, imagen_url
            FROM productos
            ORDER BY
                CASE categoria
                    WHEN 'Secos'             THEN 1
                    WHEN 'Frutas y Verduras' THEN 2
                    WHEN 'Refrigerados'      THEN 3
                    WHEN 'Congelados'        THEN 4
                    ELSE 5
                END,
                pasillo DESC,
                gondola ASC
        `);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'No hay productos disponibles' });
        }

        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.patch('/usuarios/:id/disponibilidad', authenticateToken, async (req, res) => {
    try {
        const { disponible } = req.body;
        await db.query('UPDATE usuarios SET disponible = $1 WHERE id = $2', [disponible, req.params.id]);
        
        // Si se marca disponible, intentar asignar un pedido pendiente
        if (disponible) {
            const pedidoRes = await db.query('SELECT * FROM pedidos WHERE estado = $1 AND picker_id IS NULL LIMIT 1', ['pendiente']);
            if (pedidoRes.rows.length > 0) {
                const pedido = pedidoRes.rows[0];
                await db.query('UPDATE pedidos SET picker_id = $1, estado = $2 WHERE id = $3', [req.params.id, 'en_proceso', pedido.id]);
            }
        }
        res.json({ mensaje: 'Disponibilidad actualizada' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Endpoint para que el picker marque el pedido como completado
app.patch('/pedidos/:id/completar', authenticateToken, async (req, res) => {
    try {
        await db.query('UPDATE pedidos SET estado = $1 WHERE id = $2', ['completado', req.params.id]);
        
        // Asignar siguiente pedido si hay disponible
        const pickerRes = await db.query('SELECT picker_id FROM pedidos WHERE id = $1', [req.params.id]);
        const picker_id = pickerRes.rows[0].picker_id;
        
        const nextPedidoRes = await db.query('SELECT * FROM pedidos WHERE estado = $1 AND picker_id IS NULL LIMIT 1', ['pendiente']);
        if (nextPedidoRes.rows.length > 0) {
            const nextPedido = nextPedidoRes.rows[0];
            await db.query('UPDATE pedidos SET picker_id = $1, estado = $2 WHERE id = $3', [picker_id, 'en_proceso', nextPedido.id]);
        } else {
            // Si no hay más pedidos, marcar picker como no disponible
            await db.query('UPDATE usuarios SET disponible = $1 WHERE id = $2', [false, picker_id]);
        }
        
        res.json({ mensaje: 'Pedido completado y nueva tarea asignada si corresponde' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/pedidos', authenticateToken, async (req, res) => {
    try {
        const { picker_id, estado } = req.query;
        let query = 'SELECT * FROM pedidos WHERE 1=1';
        let params = [];
        if (picker_id) {
            query += ' AND picker_id = $' + (params.length + 1);
            params.push(picker_id);
        }
        if (estado) {
            query += ' AND estado = $' + (params.length + 1);
            params.push(estado);
        }
        const result = await db.query(query, params);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.patch('/pedidos/:id', authenticateToken, async (req, res) => {
    try {
        const { estado, picker_id } = req.body;
        let query = 'UPDATE pedidos SET ';
        let sets = [];
        let params = [];
        
        if (estado) {
            sets.push('estado = $' + (params.length + 1));
            params.push(estado);
        }
        if (picker_id) {
            sets.push('picker_id = $' + (params.length + 1));
            params.push(picker_id);
        }
        
        query += sets.join(', ') + ' WHERE id = $' + (params.length + 1);
        params.push(req.params.id);
        
        await db.query(query, params);
        res.json({ mensaje: 'Pedido actualizado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/pedidos', authenticateToken, async (req, res) => {
    try {
        const { picker_id, productos, estado } = req.body;
        const resultPedido = await db.query(
            'INSERT INTO pedidos (picker_id, estado) VALUES ($1, $2) RETURNING id',
            [picker_id || null, estado || 'pendiente']
        );
        const pedido_id = resultPedido.rows[0].id;

        for (const p of productos) {
            await db.query(
                'INSERT INTO pedido_productos (pedido_id, producto_id, cantidad_solicitada) VALUES ($1, $2, $3)',
                [pedido_id, p.producto_id, p.cantidad_solicitada]
            );
        }

        res.status(201).json({ pedido_id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/pedidos/:id', authenticateToken, async (req, res) => {
    try {
        const pedidoResult = await db.query('SELECT * FROM pedidos WHERE id = $1', [req.params.id]);
        if (pedidoResult.rows.length === 0) return res.status(404).json({ error: 'Pedido no encontrado' });

        const productosResult = await db.query(
            'SELECT pp.*, p.nombre FROM pedido_productos pp JOIN productos p ON pp.producto_id = p.id WHERE pp.pedido_id = $1',
            [req.params.id]
        );

        res.json({ ...pedidoResult.rows[0], productos: productosResult.rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.patch('/pedido-productos/:id', authenticateToken, async (req, res) => {
    try {
        const { cantidad_recolectada } = req.body;
        
        // Obtener datos actuales para validar
        const prodResult = await db.query(
            'SELECT pp.cantidad_solicitada FROM pedido_productos pp WHERE pp.id = $1',
            [req.params.id]
        );
        if (prodResult.rows.length === 0) return res.status(404).json({ error: 'Registro no encontrado' });
        
        const cantidad_solicitada = prodResult.rows[0].cantidad_solicitada;

        // Validaciones
        if (cantidad_recolectada < 0 || cantidad_recolectada > cantidad_solicitada) {
            return res.status(400).json({ error: 'Cantidad inválida' });
        }

        await db.query(
            'UPDATE pedido_productos SET cantidad_recolectada = $1 WHERE id = $2',
            [cantidad_recolectada, req.params.id]
        );
        res.json({ mensaje: 'Cantidad actualizada' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Servir archivos estáticos DESPUÉS de las rutas de la API
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

// Inicializar DB antes de arrancar el servidor
db.initDB().then(() => {
    app.listen(PORT, () => console.log(`API escuchando en puerto ${PORT}`));
}).catch(err => {
    console.error('Error al inicializar la base de datos:', err);
    process.exit(1);
});
