const Movie = require('../models/movie');
const express = require('express');

const movieController = {
    listarMovie: async (req, res) => {
        const movie = await Movie.findAll();
        res.json(movie);
    }
};

module.exports = movieController;