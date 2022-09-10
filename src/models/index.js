const Movie = require('./movie');
const MovieCast = require('./movieCast');
const Person = require('./person');
const Gender = require('./gender');
const Company = require('./movieCompany');
const productionCompany = require('./production_company')

MovieCast.belongsTo(Gender, {
    foreignKey: 'gender_id',
});

MovieCast.belongsTo(Person, {
    foreignKey: 'person_id',
});

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
    MovieCast
}