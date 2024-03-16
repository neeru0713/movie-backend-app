const { Movie } = require("../models/Movie");
const movieService = require("../services/movieService.js");

const createMovie = async (req, res) => {
  try {
    let newMovie = await movieService.createMovie(req.body);
    if (newMovie) {
      res.status(201).json({ movie: newMovie });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateMovie = async (req, res) => {
  try {
    let updatedMovie = await movieService.updateMovie(req.params.id, req.body);
    if (updatedMovie) {
      res.status(201).json({ movie: updatedMovie });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createMovie,
  updateMovie,
};
