const { Gender, Movie, MovieCast, Person } = require("../models/index");

const movieCastController = {
  listCast: async (req, res) => {
    try {
      const result = await MovieCast.findAll({
        include: [
          {
            model: Movie,
          },
          {
            model: Person,
          },
          {
            model: Gender,
          },
        ],
      });
      res.json(result);
    } catch (error) {
      res.status(401).json("Deu ruim, chame o suporte técnico!");
    }
  }
};

module.exports = movieCastController;
