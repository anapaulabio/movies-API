const {db} = require('../database/config');
const {DataTypes} = require('sequelize');
const { Movie, Genre} = require('./index');

const movieGenre = db.define("movieGenre", {
    movie_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Movie,
            foreignKey: 'movie_id'
        }
    },
    genre_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Genre,
            foreignKey: 'genre_id'
        }
    }
},
{
    tableName: 'movie_genres',
    timestamps: false,
})

module.exports = movieGenre;