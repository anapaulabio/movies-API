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
    }
}

module.exports = genreController;