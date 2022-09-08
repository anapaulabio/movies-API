const { Movie } = require('../models/index');
const Company = require('../models/production_company');

const companyController = {
    listCompany: async (req, res) => {
        const company = await Company.findAll({
            include: Movie
        });
        res.json(company);
    }
};

module.exports  = companyController;