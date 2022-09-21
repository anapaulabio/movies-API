const {db} = require("../database/config");
const {DataTypes} = require('sequelize')

const genre = db.define(
  "genre", {
  genre_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    genre_name: {
        type: DataTypes.STRING,
      }
  },
  {
    tableName: "genre",
    createdAt: false, 
    updatedAt: false,
  }
);

module.exports = genre;