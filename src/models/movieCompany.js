const db = require('../database/config');
const {DataTypes} = require('sequelize');
const Movie = require('./movie');
const production_company = require('./production_company');


const movieCompany = db.define("movieCompany", {

    movie_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Movie,
            foreignKey: 'movie_id'
        },
    },
    company_id: {
        type: DataTypes.INTEGER,
        references: {
            model: production_company,
            foreignKey: 'company_id'
        },
    }
},
{
    tableName: "movie_company",
    createdAt: false,
    updatedAt: false
});

module.exports = movieCompany;