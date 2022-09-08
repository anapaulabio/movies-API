const Country = require('../models/country');

const countryController = {
    listCountry: async (req, res) => {
        const country = await Country.findAll()
        res.json(country)
    },

    registerCountry: async (req, res) => {
        const {country_iso_code, country_name} = req.body;
        const country = await Country.create({
            country_iso_code,
            country_name
        });
        res.json(country);
    }
}

module.exports = countryController;