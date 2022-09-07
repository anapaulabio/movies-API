const express = require('express');

const countryController = require('../controllers/countryController');
const genderController = require('../controllers/genderController');
const departamentController = require('../controllers/departamentController');
const genreController = require('../controllers/genreController');
const keywordController = require('../controllers/keywordController');
const languageController = require('../controllers/languageController');
const languageRoleController = require('../controllers/languageRoleController');

const Routes = express.Router();

Routes.get("/country", countryController.listarCountry);
Routes.get("/gender", genderController.listarGender);
Routes.get("/departament", departamentController.listarDepartament);
Routes.get('/genre', genreController.listarGenre);
Routes.get('/keyword', keywordController.listarKeyword);
Routes.get('/language', languageController.listarLanguage);
Routes.get('/role', languageRoleController.listarRole);

module.exports = Routes

