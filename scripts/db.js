const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('comentarios.db');

// Crear tabla si no existe
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS comentarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        mensaje TEXT,
        pagina TEXT
    )
  `);
});

module.exports = db;
