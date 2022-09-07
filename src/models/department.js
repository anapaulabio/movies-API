const db = require("../database/config");
const { DataTypes } = require("sequelize");

const department = db.define(
  "department",
  {
    department_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    department_name: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "department",
    createdAt: false, // don't add createdAt attribute
    updatedAt: false,
  }
);

module.exports = department;
