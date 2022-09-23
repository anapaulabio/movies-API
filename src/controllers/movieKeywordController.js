const { Movie, Keyword, movieKeywords } = require("../models");

const movieKeywordController = {
  listMovieKeyword: async (req, res) => {
    const movieKeyword = await movieKeywords.findAll({
      include: [
        {
          model: Movie,
        },
        {
          model: Keyword,
        },
      ],
    })
    res.json(movieKeyword);
  }
};

module.exports = movieKeywordController;
