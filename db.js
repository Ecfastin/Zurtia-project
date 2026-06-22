require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'zurtia_db',
});

// Helper para esperar
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function initDB() {
    let retries = 5;
    while (retries > 0) {
        try {
            console.log(`Intentando conectar a la base de datos... (${retries} intentos restantes)`);
            // Verificar conexión
            await pool.query('SELECT 1');
            console.log('Conexión exitosa a PostgreSQL.');

            // Crear tablas si no existen
            await pool.query(`
                CREATE TABLE IF NOT EXISTS usuarios (
                    id       SERIAL PRIMARY KEY,
                    nombre   TEXT NOT NULL,
                    correo   TEXT NOT NULL UNIQUE,
                    password TEXT NOT NULL,
                    rol      TEXT NOT NULL DEFAULT 'picker'
                )
            `);

            await pool.query(`
                CREATE TABLE IF NOT EXISTS productos (
                    id         SERIAL PRIMARY KEY,
                    nombre     TEXT NOT NULL,
                    categoria  TEXT NOT NULL,
                    pasillo    INTEGER NOT NULL,
                    gondola    INTEGER NOT NULL,
                    imagen_url TEXT
                )
            `);

            await pool.query(`
                CREATE TABLE IF NOT EXISTS pedidos (
                    id          SERIAL PRIMARY KEY,
                    picker_id   INTEGER REFERENCES usuarios(id),
                    estado      TEXT NOT NULL DEFAULT 'pendiente',
                    creado_en   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            `);

            await pool.query(`
                CREATE TABLE IF NOT EXISTS pedido_productos (
                    id                    SERIAL PRIMARY KEY,
                    pedido_id             INTEGER REFERENCES pedidos(id),
                    producto_id           INTEGER REFERENCES productos(id),
                    cantidad_solicitada   INTEGER NOT NULL,
                    cantidad_recolectada  INTEGER DEFAULT 0
                )
            `);

            // Seed usuarios
            const usuariosCount = await pool.query('SELECT COUNT(*) FROM usuarios');
            if (parseInt(usuariosCount.rows[0].count) === 0) {
                await pool.query('INSERT INTO usuarios (nombre, correo, password, rol) VALUES ($1, $2, $3, $4)', ['Juan Pérez', 'picker@zurtia.cl', '1234', 'picker']);
                await pool.query('INSERT INTO usuarios (nombre, correo, password, rol) VALUES ($1, $2, $3, $4)', ['Ana López', 'supervisor@zurtia.cl', 'abcd', 'supervisor']);
                console.log('Usuarios iniciales insertados.');
            }

            // Seed productos
            const productosCount = await pool.query('SELECT COUNT(*) FROM productos');
            if (parseInt(productosCount.rows[0].count) === 0) {
                await pool.query('INSERT INTO productos (nombre, categoria, pasillo, gondola, imagen_url) VALUES ($1, $2, $3, $4, $5)', ['Arroz 1kg', 'Secos', 10, 3, 'https://example.com/arroz.jpg']);
                await pool.query('INSERT INTO productos (nombre, categoria, pasillo, gondola, imagen_url) VALUES ($1, $2, $3, $4, $5)', ['Fideos 500g', 'Secos', 9, 1, 'https://example.com/fideos.jpg']);
                await pool.query('INSERT INTO productos (nombre, categoria, pasillo, gondola, imagen_url) VALUES ($1, $2, $3, $4, $5)', ['Leche 1L', 'Refrigerados', 5, 2, 'https://example.com/leche.jpg']);
                await pool.query('INSERT INTO productos (nombre, categoria, pasillo, gondola, imagen_url) VALUES ($1, $2, $3, $4, $5)', ['Helado', 'Congelados', 2, 1, 'https://example.com/helado.jpg']);
                await pool.query('INSERT INTO productos (nombre, categoria, pasillo, gondola, imagen_url) VALUES ($1, $2, $3, $4, $5)', ['Manzana', 'Frutas y Verduras', 7, 4, 'https://example.com/manzana.jpg']);
                console.log('Productos iniciales insertados.');
            }
            
            // Seed pedidos y pedido_productos
            const pedidosCount = await pool.query('SELECT COUNT(*) FROM pedidos');
            if (parseInt(pedidosCount.rows[0].count) === 0) {
                // Insertar pedido para el picker (ID 1)
                const res = await pool.query(
                    'INSERT INTO pedidos (picker_id, estado) VALUES ($1, $2) RETURNING id',
                    [1, 'pendiente']
                );
                const pedidoId = res.rows[0].id;
                
                // Insertar productos en el pedido (asumiendo que los productos 1, 2, 3 existen)
                await pool.query('INSERT INTO pedido_productos (pedido_id, producto_id, cantidad_solicitada) VALUES ($1, $2, $3)', [pedidoId, 1, 3]);
                await pool.query('INSERT INTO pedido_productos (pedido_id, producto_id, cantidad_solicitada) VALUES ($1, $2, $3)', [pedidoId, 2, 2]);
                console.log('Pedido de prueba insertado.');
            }
            
            return; // Éxito, salir de la función

        } catch (err) {
            console.error('Error al conectar o inicializar la base de datos:', err.message);
            retries -= 1;
            if (retries === 0) {
                throw new Error('No se pudo conectar a la base de datos tras varios intentos.');
            }
            await sleep(2000); // Esperar 2 segundos antes de reintentar
        }
    }
}

module.exports = {
    query: (text, params) => pool.query(text, params),
    initDB
};
