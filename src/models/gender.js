const db = require("../database/config");
const {DataTypes} = require('sequelize')

const gender = db.define(
  "gender",
  {
    gender_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    gender: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "gender",
    createdAt: false, // don't add createdAt attribute
    updatedAt: false,
  }
);

module.exports = gender