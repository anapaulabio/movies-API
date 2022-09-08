const db = require('../database/config');
const {DataTypes} = require('sequelize');
const Movie = require('./movie');
const Person = require('./person');
const Gender = require('./gender');

const movieCast = db.define("movieCast", {
    movie_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Movie,
            foreignKey: 'movie_id'
        },
    },
    person_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Person,
            foreignKey: 'person_id'
        },
    },
    character_name: {
        type: DataTypes.STRING
    },
    gender_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Gender,
            foreignKey: 'gender_id'
        },
    },
    cast_order: {
        type: DataTypes.INTEGER,
    }
},
{
    tableName: "movie_cast",
    createdAt: false,
    updatedAt: false
});

module.exports = movieCast;