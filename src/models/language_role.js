const db = require("../database/config");
const {DataTypes} = require('sequelize');

const language_role = db.define("language_role", {
    role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    language_role: {
        type: DataTypes.STRING
    }
},
{
    nameTable: "language_role",
    createdAt: false,
    updatedAt: false
});


module.exports = language_role;