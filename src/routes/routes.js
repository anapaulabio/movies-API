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

const Routes = express.Router(); 

Routes.get("/country", countryController.listCountry);
Routes.get("/country/:id", countryController.listOne);
Routes.post("/new-country", countryController.registerCountry);
Routes.put("/country/:country_id/update", countryController.updateCountry);
Routes.delete("/country/:country_id/delete", countryController.deleteCountry);

Routes.get("/department", departmentController.listDepartment);
Routes.get("/department/:id", departmentController.listOne);
Routes.post("/new-department", departmentController.registerDepartment);
Routes.put("/department/:department_id/update", departmentController.updateDepartment);
Routes.delete("/department/:department_id/delete", departmentController.deleteDepartment);

Routes.get("/gender", genderController.listGender);
Routes.get("/gender/:id", genderController.listOne);
//Routes.get("/gender/movie_cast", genderController.showTheMovieCast);
Routes.post("/new-gender", genderController.registerGender);
Routes.put("/gender/:gender_id/update", genderController.updateGender);
Routes.delete("/gender/:gender_id/delete", genderController.deleteGender);

Routes.get("/genre", genreController.listGenre);
Routes.get("/genre/:id", genreController.listOne);
Routes.post("/new-genre", genreController.registerGenre);
Routes.put("/genre/:genre_id/update", genreController.updateGenre);
Routes.delete("/genre/:genre_id/delete", genreController.deleteGenre);

Routes.get("/keyword", keywordController.listKeyword);
Routes.get("/keyword/id", keywordController.listOne);
Routes.post("/new-keyword", keywordController.registerKeyword);
Routes.put("/keyword/:keyword_id/update", keywordController.updateKeyword);
Routes.delete("/keyword/:keyword_id/delete", keywordController.deleteKeyword);

Routes.get("/language", languageController.listLanguage);
Routes.get("/language/:id", languageController.listOne);
Routes.post("/new-language", languageController.registerLanguage);
Routes.put("/language/:language_id/update", languageController.updateLanguage);
Routes.delete("/language/:language_id/delete", languageController.deleteLanguage);

Routes.get("/role", languageRoleController.listRole);
Routes.get("/role/:id", languageRoleController.listOne);
Routes.post("/new-role", languageRoleController.registerRole);
Routes.put("/role/:role_id/update", languageRoleController.updateRole);
Routes.delete("/role/:role_id/delete", languageRoleController.deleteRole);

Routes.get("/movie", movieController.listMovie);
Routes.get("/movie/:id", movieController.listOne);
Routes.post("/new-movie", movieController.registerMovie);
Routes.put("/movie/:movie_id/update", movieController.updateMovie);
Routes.delete("/movie/:movie_id/delete", movieController.deleteMovie);

Routes.get("/person", personController.listPerson);
Routes.get("/person/:id", personController.listOne);
//Routes.get("/person/movie_cast", personController.showTheMovieCast);
Routes.post("/new-person", personController.registerPerson);
Routes.put("/person/:person_id/update", personController.updatePerson);
Routes.delete("/person/:person_id/delete", personController.deletePerson);

Routes.get("/company", companyController.listCompany);
Routes.get("/company/:id", companyController.listOne);
Routes.post('/new-company', companyController.registerCompany);
Routes.put('/company/:company_id/update', companyController.updateCompany);
Routes.delete('/company/:company_id/delete', companyController.deleteCompany);

module.exports = Routes

