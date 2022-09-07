const Genre = require('../models/genre');

const genreController = {
    listarGenre: async (req, res) => {
        const genre = await Genre.findAll()
        res.json(genre)
    }
}

module.exports = genreController;