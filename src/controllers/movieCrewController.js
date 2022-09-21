const { Movie, Person, Department, MovieCrew} = require('../models');

const movieCrewController = {
    listMovieCrew: async (req, res) => {
        try {
          const result = await MovieCrew.findAll({
            include: [
              {
                model: Movie,
              },
              {
                model: Person,
              },
              {
                model: Department,
              },
            ],
          });
          res.json(result);
        } catch (error) {
          res.status(401).json("Deu ruim, chame o suporte técnico!");
        }
      }
}

module.exports = movieCrewController;