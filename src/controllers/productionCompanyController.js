const { Movie } = require("../models/index");
const Company = require("../models/production_company");

const companyController = {
  listCompany: async (req, res) => {
    const company = await Company.findAll({
      include: Movie,
    });
    res.json(company);
  },

  registerCompany: async (req, res) => {
    const { company_name } = req.body;
    const company = await Company.create({
      company_name,
    });
    res.json(company);
  },

  updateCompany: async (req, res) => {
    const { company_id } = req.params;
    const { company_name } = req.body;
    const company = await Company.update(
      {
        company_name,
      },
      {
        where: {
          company_id,
        },
      }
    );
    res.json("Company updated");
  },
  deleteCompany: async (req, res) => {
    const {company_id} = req.params;
    await Company.destroy({
        where: {
            company_id
        }
    });
    res.json("Company deleted");
  }
};

module.exports = companyController;
