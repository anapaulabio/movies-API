const Company = require('../models/production_company');

const companyController = {
    listarCompany: async (req, res) => {
        const company = await Company.findAll();
        res.json(company);
    }
};

module.exports  = companyController;