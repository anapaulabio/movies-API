const { Movie, Language, LanguageRole, movieLanguages } = require("../models");

const movieLanguageController = {
  listMovieLanguage: async (req, res) => {
    const movieLanguage = await movieLanguages.findAll({
      include: [
        {
          model: Movie,
        },
        {
          model: Language,
        },
        {
          model: LanguageRole,
        },
      ],
    })
    res.json(movieLanguage);
  }
};

module.exports = movieLanguageController;