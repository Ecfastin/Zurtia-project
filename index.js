const express = require('express');
const db = require('./db');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());

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

app.get('/cursos', (req, res) => {
    res.json(db.prepare('SELECT * FROM cursos').all());
});

app.post('/cursos', (req, res) => {
    const { nombre, instructor, creditos } = req.body;
    const r = db.prepare(
        'INSERT INTO cursos (nombre, instructor, creditos) VALUES (?, ?, ?)'
    ).run(nombre, instructor, creditos);
    res.status(201).json({ id: r.lastInsertRowid, nombre, instructor, creditos });
});

app.put('/cursos/:id', (req, res) => {
    const { nombre, instructor, creditos } = req.body;
    const i = db.prepare(
        'UPDATE cursos SET nombre=?, instructor=?, creditos=? WHERE id=?'
    ).run(nombre, instructor, creditos, req.params.id);
    if (i.changes === 0) return res.status(404).json({ error: 'Curso no encontrado' });
    res.json({ mensaje: 'Curso actualizado' });
});

app.delete('/cursos/:id', (req, res) => {
    const i = db.prepare('DELETE FROM cursos WHERE id=?').run(req.params.id);
    if (i.changes === 0) return res.status(404).json({ error: 'Curso no encontrado' });
    res.json({ mensaje: 'Curso eliminado' });
});

app.post('/login', (req, res) => {
    const { correo, password } = req.body;
    if (!correo || !password) {
        return res.status(400).json({ error: 'Correo y contraseña son requeridos' });
    }
    const usuario = db.prepare('SELECT * FROM usuarios WHERE correo = ?').get(correo);
    if (!usuario) {
        return res.status(401).json({ error: 'Correo no registrado' });
    }
    if (usuario.password !== password) {
        return res.status(401).json({ error: 'Contraseña incorrecta' });
    }
    res.json({
        mensaje: 'Login exitoso',
        usuario: {
            id: usuario.id,
            nombre: usuario.nombre,
            correo: usuario.correo,
            rol: usuario.rol
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API escuchando en puerto ${PORT}`));