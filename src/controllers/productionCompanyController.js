const { Movie } = require('../models/index');
const Company = require('../models/production_company');

const companyController = {
    listCompany: async (req, res) => {
        const company = await Company.findAll({
            include: Movie
        });
        res.json(company);
    },

    registerCompany: async (req, res) => {
        const {company_name} = req.body;
        const company = await Company.create({
            company_name
        })
        res.json(company);
    }
};

module.exports  = companyController;