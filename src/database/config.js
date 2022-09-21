const Sequelize = require("sequelize");

//constantes com informações do BD
const DB_NAME = "movies"
const DB_USER = "root"
const DB_PASS = "Root1993"
const DB_CONFG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306
}

let db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFG)
//nova função criada para conectar o servidor ao banco de dados 

//função assincrona criada para verificar se a conexão foi gerada com sucesso
async function hasConection() {
    try {
        await db.authenticate();
        console.log("Banco de dados conectado")
    } catch (error) {
        console.error("Erro ao tentar realizar conexão com banco de dados novamente")
    }
}

// estrutura pronta para ser utilizada no server, concatenando o db ao hasConection
Object.assign(db, {
    hasConection
});

module.exports = { db, hasConection };