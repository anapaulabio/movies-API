const db = require("../database/config");
const { DataTypes } = require("sequelize");

const language = db.define(
  "language",
  {
    language_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
    },
    language_code: {
      type: DataTypes.STRING,
    },
    language_name: {
      type: DataTypes.STRING,
    },
  },
  {
    nameTable: "language",
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = language;
