const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;


app.use(express.json());
app.use(cors());


const usuariosRouter = require('./routes/user');
app.use('/api/usuarios', usuariosRouter);


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
