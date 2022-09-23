const express = require('express');

const countryController = require('../controllers/countryController');
const departmentController = require('../controllers/departmentController');
const genderController = require('../controllers/genderController');
const genreController = require('../controllers/genreController');
const keywordController = require('../controllers/keywordController');
const languageController = require('../controllers/languageController');
const languageRoleController = require('../controllers/languageRoleController');
const movieController = require('../controllers/movieController');
const personController = require('../controllers/personController');
const companyController = require('../controllers/productionCompanyController');
const movieCastController = require('../controllers/movieCastController');
const movieCompanyController = require('../controllers/movieCompanyController');
const movieCrewController = require('../controllers/movieCrewController');
const movieGenresController = require('../controllers/movieGenreController');
const movieLanguageController = require('../controllers/movieLanguageController');
const movieKeywordController = require('../controllers/movieKeywordController');

const Routes = express.Router(); 

Routes.get("/country", countryController.listCountry);
Routes.get("/country/:id", countryController.listOne);
Routes.post("/country", countryController.registerCountry);
Routes.put("/country/:country_id", countryController.updateCountry);
Routes.delete("/country/:country_id", countryController.deleteCountry);

Routes.get("/department", departmentController.listDepartment);
Routes.get("/department/:id", departmentController.listOne);
Routes.post("/department", departmentController.registerDepartment);
Routes.put("/department/:department_id", departmentController.updateDepartment);
Routes.delete("/department/:department_id", departmentController.deleteDepartment);

Routes.get("/gender", genderController.listGender);
Routes.get("/gender/:id", genderController.listOne);
Routes.post("/gender", genderController.registerGender);
Routes.put("/gender/:gender_id", genderController.updateGender);
Routes.delete("/gender/:gender_id", genderController.deleteGender);

Routes.get("/genre", genreController.listGenre);
Routes.get("/genre/:id", genreController.listOne);
Routes.post("/genre", genreController.registerGenre);
Routes.put("/genre/:genre_id", genreController.updateGenre);
Routes.delete("/genre/:genre_id", genreController.deleteGenre);

Routes.get("/keyword", keywordController.listKeyword);
Routes.get("/keyword/id", keywordController.listOne);
Routes.post("/keyword", keywordController.registerKeyword);
Routes.put("/keyword/:keyword_id", keywordController.updateKeyword);
Routes.delete("/keyword/:keyword_id", keywordController.deleteKeyword);

Routes.get("/language", languageController.listLanguage);
Routes.get("/language/:id", languageController.listOne);
Routes.post("/language", languageController.registerLanguage);
Routes.put("/language/:language_id", languageController.updateLanguage);
Routes.delete("/language/:language_id", languageController.deleteLanguage);

Routes.get("/role", languageRoleController.listRole);
Routes.get("/role/:id", languageRoleController.listOne);
Routes.post("/role", languageRoleController.registerRole);
Routes.put("/role/:role_id", languageRoleController.updateRole);
Routes.delete("/role/:role_id", languageRoleController.deleteRole);

Routes.get("/movie", movieController.listMovie);
Routes.get("/movie/:id", movieController.listOne);
Routes.post("/movie", movieController.registerMovie);
Routes.put("/movie/:movie_id", movieController.updateMovie);
Routes.delete("/movie/:movie_id", movieController.deleteMovie);

Routes.get("/person", personController.listPerson);
Routes.get("/person/:id", personController.listOne);
Routes.post("/person", personController.registerPerson);
Routes.put("/person/:person_id", personController.updatePerson);
Routes.delete("/person/:person_id", personController.deletePerson);

Routes.get("/company", companyController.listCompany);
Routes.get("/company/:id", companyController.listOne);
Routes.post('/company', companyController.registerCompany); 
Routes.put('/company/:company_id', companyController.updateCompany);
Routes.delete('/company/:company_id', companyController.deleteCompany);

Routes.get("/moviecast", movieCastController.listCast);
Routes.get("/moviecompany", movieCompanyController.listMovieCompany);
Routes.get("/movieCrew", movieCrewController.listMovieCrew);
Routes.get("/moviegenre", movieGenresController.listMovieGenre);
Routes.get("/movielanguage", movieLanguageController.listMovieLanguage);
Routes.get("/moviekeyword", movieKeywordController.listMovieKeyword);

module.exports = Routes

