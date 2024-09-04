const express = require('express');
const db = require('./conection/db');
const app = express();
const port = 3000;

var nome = '';
// Middleware para parsear JSON
app.use(express.json());

// Rota simples para teste
app.get('/', (req, res) => {
  res.send(`Hello ${nome} !`);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
