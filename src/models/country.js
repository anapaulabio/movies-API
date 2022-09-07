const db = require("../database/config");
const {DataTypes} = require('sequelize')

const country = db.define(
  "country",
  {
    country_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    country_iso_code: {
      type: DataTypes.STRING,
    },
    country_name: {
        type: DataTypes.STRING,
      }
  },
  {
    tableName: "country",
    createdAt: false, // don't add createdAt attribute
    updatedAt: false,
  }
);

module.exports = country