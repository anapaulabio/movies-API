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

Routes.get("/country", countryController.listarCountry);
Routes.get("/gender", genderController.listarGender);
Routes.get("/departament", departmentController.listarDepartment);
Routes.get('/genre', genreController.listarGenre);
Routes.get('/keyword', keywordController.listarKeyword);
Routes.get('/language', languageController.listarLanguage);
Routes.get('/role', languageRoleController.listarRole);
Routes.get('/movie', movieController.listarMovie);
Routes.get('/person', personController.listarPerson);
Routes.get('/company', companyController.listarCompany);

module.exports = Routes

