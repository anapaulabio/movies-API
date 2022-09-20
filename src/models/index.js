const Movie = require('./movie');
const MovieCast = require('./movieCast');
const Person = require('./person');
const Gender = require('./gender');
const Genre = require('./genre');
const Company = require('./movieCompany');
const productionCompany = require('./production_company')
const Department = require('./department');
const Keyword = require('./keyword');
const Language = require('./language');
const LanguageRole = require('./language_role');

MovieCast.belongsTo(Gender, {
    foreignKey: 'gender_id',
});

MovieCast.belongsTo(Person, {
    foreignKey: 'person_id',
});

Person.hasMany(MovieCast, {
    foreignKey: 'person_id',
})

Gender.hasMany(MovieCast, {
    foreignKey: 'gender_id',
});

MovieCast.belongsTo(Movie, {
    foreignKey: 'movie_id',
})

module.exports = {
    Movie,
    productionCompany,
    Person,
    Gender,
    Company,
    MovieCast,
    Department,
    Genre,
    Keyword,
    Language,
    LanguageRole
}