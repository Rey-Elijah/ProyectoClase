const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path');

const app = express();
const PORT = 3000;

//middleware
app.use(bodyParser.json());

//servir archivos estáticos desde la raíz del proyecto
app.use(express.static(path.join(__dirname, '..')));

//ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

//obtener todos los comentarios
app.get('/comentarios', (req, res) => {
  const pagina = req.query.pagina;
  if (!pagina) return res.status(400).json({ error: 'Página no especificada' });

  db.all(
    'SELECT * FROM comentarios WHERE pagina = ? ORDER BY id DESC',
    [pagina],
    (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    }
  );
});

//guardar nuevo comentario
app.post('/comentarios', (req, res) => {
  const { nombre, mensaje, pagina } = req.body;
  if (!nombre || !mensaje || !pagina) {
    return res.status(400).json({ error: 'Nombre, mensaje y página requeridos' });
  }
  db.run(
    'INSERT INTO comentarios (nombre, mensaje, pagina) VALUES (?, ?, ?)',
    [nombre, mensaje, pagina],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, nombre, mensaje, pagina });
    }
  );
});


app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
