const { Movie, productionCompany, MovieCompany} = require('../models');

const movieCompanyController = {
    listMovieCompany: async (req, res) => {
        try {
          const result = await MovieCompany.findAll({
            include: [
              {
                model: Movie,
              },
              {
                model: productionCompany
              },
            ],
          });
          res.json(result);
        } catch (error) {
          res.status(401).json("Deu ruim, chame o suporte técnico!");
        }
      }
}

module.exports = movieCompanyController;