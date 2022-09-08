const Gender = require('../models/gender');

const genderController = {
    listGender: async (req, res) => {
        const gender = await Gender.findAll()
        res.json(gender)
    },

    registerGender: async (req, res) => {
        const {gender} = req.body;
        const genderC  = await Gender.create({
            gender
        })
        res.json(genderC)
    }
}

module.exports = genderController