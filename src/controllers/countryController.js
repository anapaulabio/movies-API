const Country = require('../models/country');

const countryController = {
    listCountry: async (req, res) => {
        const country = await Country.findAll()
        res.json(country)
    },

    registerCountry: async (req, res) => {
        const {contry_iso_code, country_name} = req.body;
        const country = await Country.create({
            contry_iso_code,
            country_name
        });
        res.json(country);
    }
}

module.exports = countryController;