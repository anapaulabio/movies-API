const db = require("../database/config");
const {DataTypes} = require('sequelize');

const person = db.define("person", {
    person_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    person_name: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'person',
    createdAt: false,
    updatedAt: false
});

module.exports = person