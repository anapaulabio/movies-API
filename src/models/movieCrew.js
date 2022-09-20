const {db} = require('../database/config')
const { DataTypes } = require('sequelize')
const {Movie, Person, Department} = require('./index')

const movieCrew = db.define(
    "movieCrew", {
        movie_id: {
            type: DataTypes.INTEGER,
        references: {
            model: Movie,
            foreignKey: 'movie_id'
        }
    },
        person_id: {
            type: DataTypes.INTEGER,
        references: {
            model: Person,
            foreignKey: 'person_id'
        }
    },
        department_id:{ 
            type: DataTypes.INTEGER,
        references: {
            model: Department,
            foreignKey: 'department_id'
        }
    },
        job: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'movie_crew',
        timestamps: false
    }
)

module.exports = movieCrew
