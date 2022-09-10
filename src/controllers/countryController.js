const Country = require("../models/country");

const countryController = {
  listCountry: async (req, res) => {
    const country = await Country.findAll();
    res.json(country);
  },

  listOne: async (req, res) => {
    const { id } = req.params;
    const oneCountry = await Country.findByPk(id)

    res.status(200).json(oneCountry);
  },
  
  registerCountry: async (req, res) => {
    const { country_iso_code, country_name } = req.body;
    const country = await Country.create({
      country_iso_code,
      country_name,
    });
    return res.status(201).json(country);
  },

  updateCountry: async (req, res) => {
    const { country_id } = req.params;
    const { country_iso_code, country_name } = req.body;
    const country = await Country.update(
      {
        country_iso_code,
        country_name,
      },
      {
        where: {
          country_id,
        },
      }
    );

    return res.status(200).json("Country updated");
  },

  deleteCountry: async (req, res) => {
    const { country_id } = req.params;
    await Country.destroy({
      where: {
        country_id,
      },
    });

    return res.status(204).json("Country deleted");
  },
};

module.exports = countryController;
