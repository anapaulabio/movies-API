const Country = require('../models/country');

const countryController = {
    listarCountry: async (req, res) => {
        const country = await Country.findAll()
        res.json(country)
    }
}

module.exports = countryController;