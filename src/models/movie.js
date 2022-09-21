const {db} = require("../database/config");
const {DataTypes} = require('sequelize');

const Movie = db.define( "movie", {
    movie_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    budget: {
        type: DataTypes.INTEGER
    },
    homepage: {
        type: DataTypes.STRING
    },
    overview: {
        type: DataTypes.STRING
    },
    popularity: {
        type: DataTypes.DECIMAL
    },
    release_date: {
        type: DataTypes.DATE
    },
    revenue: {
        type: DataTypes.BIGINT
    },
    runtime: {
        type: DataTypes.INTEGER 
    },
    movie_status: {
        type: DataTypes.STRING
    },
    tagline: {
        type: DataTypes.STRING
    },
    vote_average: {
        type: DataTypes.DECIMAL
    },
    vote_count: {
        type: DataTypes.INTEGER
    }
},
{
    tableName: "movie",
    createdAt: false,
    updatedAt: false
})

module.exports = Movie;