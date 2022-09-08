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

Routes.get('/genre', genreController.listGenre);

Routes.get('/keyword', keywordController.listKeyword);

Routes.get('/language', languageController.listLanguage);

Routes.get('/role', languageRoleController.listRole);

Routes.get('/movie', movieController.listMovie);

Routes.get('/person', personController.listPerson);

Routes.get('/company', companyController.listCompany);

module.exports = Routes

