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
const MovieCompany = require('./movieCompany');
const MovieCrew = require('./movieCrew');
const movieGenres = require('./movieGenres');
const movieKeywords = require('./movieKeywords');
const movieLanguages = require('./movieLanguages');


MovieCast.belongsTo(Gender, {
    foreignKey: 'gender_id',
});

MovieCast.belongsTo(Person, {
    foreignKey: 'person_id',
});

MovieCast.belongsTo(Movie, {
    foreignKey: 'movie_id',
});

MovieCompany.belongsTo(Movie, {
    foreignKey: 'movie_id',
});

MovieCompany.belongsTo(productionCompany, {
    foreignKey: 'company_id',
});

MovieCrew.belongsTo( Movie, {
    foreignKey: 'movie_id',
});

MovieCrew.belongsTo(Person, {
    foreignKey: 'person_id',
});

MovieCrew.belongsTo(Department, {
    foreignKey: 'department_id',
});

movieGenres.belongsTo(Movie, {
    foreignKey: 'movie_id',
});

movieGenres.belongsTo(Genre, {
    foreignKey: 'genre_id',
});

movieKeywords.belongsTo(Movie, {
    foreignKey: 'movie_id',
});

movieKeywords.belongsTo(Keyword, {
    foreignKey: 'keyword_id',
});

movieLanguages.belongsTo(Movie, {
    foreignKey: 'movie_id',
});

movieLanguages.belongsTo(Language, {
    foreignKey: 'language_id',
});

movieLanguages.belongsTo(LanguageRole, {
    foreignKey: 'language_role_id',
});


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
    LanguageRole,
    MovieCompany,
    MovieCrew,
    movieGenres,
    movieKeywords,
    movieLanguages
}