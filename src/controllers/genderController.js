const Gender = require('../models/gender');

const genderController = {
    listGender: async (req, res) => {
        const gender = await Gender.findAll()
        res.json(gender)
    }
}

module.exports = genderController