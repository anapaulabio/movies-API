const Genre = require("../models/genre");

const genreController = {
  listGenre: async (req, res) => {
    const genre = await Genre.findAll();
    res.json(genre);
  },

  listOne: async (req, res) => {
    const { id } = req.params;
    const oneGenre = await Genre.findByPk(id);

    res.status(200).json(oneGenre);
  },
  
  registerGenre: async (req, res) => {
    const { genre_name } = req.body;
    const genre = await Genre.create({
      genre_name,
    });
    res.json(genre);
  },

  updateGenre: async (req, res) => {
    const { genre_id } = req.params;
    const { genre_name } = req.body;
    const genre = await Genre.update(
      {
        genre_name,
      },
      {
        where: {
          genre_id,
        },
      }
    );
    res.json("Genre updated");
  },
  deleteGenre: async (req, res) => {
    const { genre_id } = req.params;
    await Genre.destroy({
      genre_id,
    });
    res.json("Genre deleted");
  },
};

module.exports = genreController;
