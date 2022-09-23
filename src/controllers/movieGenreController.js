const { Movie, Genre, movieGenres } = require("../models/");

const movieGenreController = {
  listMovieGenre: async (req, res) => {
    const movieGenre = await movieGenres.findAll({
      include: [
        {
          model: Movie,
        },
        {
          model: Genre,
        },
      ],
    })
    res.json(movieGenre)
  }
};

module.exports = movieGenreController;
