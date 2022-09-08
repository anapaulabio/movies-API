const Genre = require('../models/genre');

const genreController = {
    listGenre: async (req, res) => {
        const genre = await Genre.findAll()
        res.json(genre)
    },

    registerGenre: async (req, res) => {
        const {genre_name} = req.body;
        const genre = await Genre.create({
            genre_name
        })
        res.json(genre)
    },

    updateGenre: async (req, res) => {
        const { genre_id } = req.params;
        const {genre_name} = req.body;
        const genre = await Genre.update({
            genre_name
        },
        {
            where: {
                genre_id
            }
        });
        res.json("Genre updated")
    },
    deleteGenre: async (req, res) => {
        const { genre_id } = req.params;
        await Genre.destroy({
            genre_id
        });
        res.json("Genre deleted")
    }
}

module.exports = genreController;