const express = require('express')
const genderController = require('../controllers/genderController');
const Routes = express.Router()

Routes.get("/", genderController.listarGender)

module.exports = Routes

