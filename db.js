const Database = require('better-sqlite3');
const db = new Database('datos.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS cursos (
        id         INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre     TEXT NOT NULL,
        instructor TEXT NOT NULL,
        creditos   INTEGER NOT NULL
    )
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
        id       INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre   TEXT NOT NULL,
        correo   TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        rol      TEXT NOT NULL DEFAULT 'picker'
    )
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS productos (
        id         INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre     TEXT NOT NULL,
        categoria  TEXT NOT NULL,
        pasillo    INTEGER NOT NULL,
        gondola    INTEGER NOT NULL,
        imagen_url TEXT
    )
`);

const usuariosExistentes = db.prepare('SELECT COUNT(*) as total FROM usuarios').get();
if (usuariosExistentes.total === 0) {
    db.prepare(`INSERT INTO usuarios (nombre, correo, password, rol) VALUES (?, ?, ?, ?)`).run('Juan Pérez', 'picker@zurtia.cl', '1234', 'picker');
    db.prepare(`INSERT INTO usuarios (nombre, correo, password, rol) VALUES (?, ?, ?, ?)`).run('Ana López', 'supervisor@zurtia.cl', 'abcd', 'supervisor');
}

const productosExistentes = db.prepare('SELECT COUNT(*) as total FROM productos').get();
if (productosExistentes.total === 0) {
    db.prepare(`INSERT INTO productos (nombre, categoria, pasillo, gondola, imagen_url) VALUES (?, ?, ?, ?, ?)`).run('Arroz 1kg', 'Secos', 10, 3, 'https://example.com/arroz.jpg');
    db.prepare(`INSERT INTO productos (nombre, categoria, pasillo, gondola, imagen_url) VALUES (?, ?, ?, ?, ?)`).run('Fideos 500g', 'Secos', 9, 1, 'https://example.com/fideos.jpg');
    db.prepare(`INSERT INTO productos (nombre, categoria, pasillo, gondola, imagen_url) VALUES (?, ?, ?, ?, ?)`).run('Leche 1L', 'Refrigerados', 5, 2, 'https://example.com/leche.jpg');
    db.prepare(`INSERT INTO productos (nombre, categoria, pasillo, gondola, imagen_url) VALUES (?, ?, ?, ?, ?)`).run('Helado', 'Congelados', 2, 1, 'https://example.com/helado.jpg');
    db.prepare(`INSERT INTO productos (nombre, categoria, pasillo, gondola, imagen_url) VALUES (?, ?, ?, ?, ?)`).run('Manzana', 'Frutas y Verduras', 7, 4, 'https://example.com/manzana.jpg');
}

module.exports = db;