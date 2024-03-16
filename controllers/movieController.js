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

const deleteMovie = async (req, res) => {
  try {
    let deleteMovie = await movieService.deleteMovie(req.params.id);
    if (!deleteMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    if (deleteMovie) {
      res.status(200).json({ movie: deleteMovie });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getMovie = async (req, res) => {
  try {
    let movie = await movieService.getMovie(req.params.id);
    if (movie) {
      return res.status(200).json({ movie });
    }
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovie,
};
