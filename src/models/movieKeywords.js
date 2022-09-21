const { db } = require('../database/config');
const { DataTypes } = require('sequelize');
const Movie = require('./movie');
const Keyword = require('./keyword');

const movieKeyword = db.define("movieKeyword", {
    movie_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Movie,
            foreignKey: 'movie_id'
        }
    },
    keyword_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Keyword,
            foreignKey: 'keyword_id'
        }
    }
},
{
    tableName: 'movie_keywords',
    timestamps: false
});

module.exports = movieKeyword