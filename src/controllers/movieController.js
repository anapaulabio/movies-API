const Movie = require('../models/movie');
const express = require('express');
const { productionCompany, Person, Gender } = require('../models/index');

const movieController = {
    listMovie: async (req, res) => {
        const movie = await Movie.findAll({
            include: Gender
        });
        res.json(movie);
    }
};

module.exports = movieController;