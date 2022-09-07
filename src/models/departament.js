const db = require("../database/config");
const {DataTypes} = require('sequelize')

const departament = db.define(
  "departament",
  {
    departament_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    departament_name: {
        type: DataTypes.STRING,
      }
  },
  {
    tableName: "departament",
    createdAt: false, // don't add createdAt attribute
    updatedAt: false,
  }
);

module.exports = departament;