const {db} = require("../database/config");
const { DataTypes } = require('sequelize');

const keyword = db.define( "keyword", {
    keyword_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    keyword_name: {
        type: DataTypes.STRING
    }
},
{
    tableName: "keyword",
    createdAt: false,
    updatedAt: false
});

module.exports = keyword;