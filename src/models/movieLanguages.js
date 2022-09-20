const { db } = require('../database/config');
const { DataTypes } = require('sequelize');
const { Movie, Language, LanguageRole } = require('./index');

const movieLanguage = db.define("movieLanguage", {
    movie_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Movie,
            foreignKey: 'movie_id',
        }
    },
    language_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Language,
            foreignKey: 'language_id',
        }
    },
    language_role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: LanguageRole,
            foreignKey: 'language_role_id',
        }
    }
})