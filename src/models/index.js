const Movie = require('./movie');
const MovieCast = require('./movieCast');
const Person = require('./person');
const Gender = require('./gender');
const Company = require('./movieCompany');
const productionCompany = require('./production_company')

Movie.belongsToMany(Person, {
    foreignKey: 'movie_id',
    through: MovieCast
});

Person.belongsToMany(Movie, {
    foreignKey: 'person_id',
    through: MovieCast
});

Gender.belongsToMany(Movie, {
    foreignKey: 'gender_id',
    through: MovieCast
});

Movie.belongsToMany(Gender, {
    foreignKey: 'movie_id',
    through: MovieCast
});

Person.belongsToMany(Gender, {
    foreignKey: 'person_id',
    through: MovieCast
});

Gender.belongsToMany(Person, {
    foreignKey: 'gender_id',
    through: MovieCast
});

Movie.belongsToMany(productionCompany, {
    foreignKey: "movie_id",
    through: Company
});

productionCompany.belongsToMany(Movie, {
    foreignKey: "company_id",
    through: Company
});

module.exports = {
    Movie,
    productionCompany,
    Person,
    Gender,
    MovieCast
}