const Movie = require("../models/movie");
const express = require("express");
const { productionCompany, Person, Gender } = require("../models/index");

const movieController = {
  listMovie: async (req, res) => {
    const movie = await Movie.findAll({
      include: Gender,
    });
    res.json(movie);
  },

  registerMovie: async (req, res) => {
    const {
      title,
      budget,
      homepage,
      overview,
      popularity,
      release_date,
      revenue,
      runtime,
      movie_status,
      tagline,
      vote_average,
      vote_count,
      gender,
    } = req.body;
    const movie = await Movie.create({
      title,
      budget,
      homepage,
      overview,
      popularity,
      release_date,
      revenue,
      runtime,
      movie_status,
      tagline,
      vote_average,
      vote_count,
      gender,
    });
    res.json(movie);
  },

  updateMovie: async (req, res) => {
    const { movie_id } = req.params;
    const {
      title,
      budget,
      homepage,
      overview,
      popularity,
      release_date,
      revenue,
      runtime,
      movie_status,
      tagline,
      vote_average,
      vote_count,
      gender,
    } = req.body;
    const movie = await Movie.update(
      {
        title,
        budget,
        homepage,
        overview,
        popularity,
        release_date,
        revenue,
        runtime,
        movie_status,
        tagline,
        vote_average,
        vote_count,
        gender,
      },
      {
        where: {
          movie_id,
        },
      }
    );
    res.json("Movie updated");
  },

  deleteMovie: async (req, res) => {
    const { movie_id } = req.params;
    await Movie.destroy({
      where: {
        movie_id
      }
    });
    res.json("Movie deleted")
  }
};

module.exports = movieController;
