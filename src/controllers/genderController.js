const sequelize = require('sequelize');
const Gender = require('../models/gender');

const genderController = {
    listarGender: async (req, res) => {
        const gender = await Gender.findAll()
        res.json(gender)
    }
}

module.exports = genderController