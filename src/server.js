const express = require('express');
const routes = require('./routes/routes');
const { hasConection } = require("./database/config")

const app = express();

hasConection()

app.use(express.json()) // para o server entender que estamos tratando requisições do arquivo json

app.use(routes);


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});