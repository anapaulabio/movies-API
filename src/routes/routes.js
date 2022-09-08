const express = require('express');

const countryController = require('../controllers/countryController');
const genderController = require('../controllers/genderController');
const departmentController = require('../controllers/departmentController');
const genreController = require('../controllers/genreController');
const keywordController = require('../controllers/keywordController');
const languageController = require('../controllers/languageController');
const languageRoleController = require('../controllers/languageRoleController');
const movieController = require('../controllers/movieController');
const personController = require('../controllers/personController');
const companyController = require('../controllers/productionCompanyController');

const Routes = express.Router();

Routes.get("/country", countryController.listCountry);
Routes.post("/new-country", countryController.registerCountry);

Routes.get("/departament", departmentController.listDepartment);
Routes.post("/new-department", departmentController.registerDepartment);

Routes.get("/gender", genderController.listGender);
Routes.post("/new-gender", genderController.registerGender);

Routes.get('/genre', genreController.listGenre);
Routes.post("/new-genre", genreController.registerGenre);

Routes.get('/keyword', keywordController.listKeyword);
Routes.post("/new-keyword", keywordController.registerKeyword);

Routes.get('/language', languageController.listLanguage);
Routes.post("/new-language", languageController.registerLanguage);

Routes.get('/role', languageRoleController.listRole);
Routes.post("/new-role", languageRoleController.registerRole);

Routes.get('/movie', movieController.listMovie);
Routes.post("/new-movie", movieController.registerMovie);

Routes.get('/person', personController.listPerson);
Routes.post("/new-person", personController.registerPerson);

Routes.get('/company', companyController.listCompany);
Routes.post("/new-company", companyController.registerCompany);

module.exports = Routes

