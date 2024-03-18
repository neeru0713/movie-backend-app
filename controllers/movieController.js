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
    const { genre, releaseYear, director } = req.query;

    const filter = {};
    if (genre) {
      filter.genre = genre;
    }
    if (releaseYear) {
      filter.releaseYear = releaseYear;
    }
    if (director) {
      filter.director = director;
    }

    let movie = await movieService.getMovie(req.params.id, filter);
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

const createReview = async (req, res) => {
  try {
    let review = await movieService.createReview(req.params.id, req.body);
    if (review) {
      return res.status(200).json({ review });
    }
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateReview = async (req, res) => {
  try {
    let review = await movieService.updateReview(req.params.reviewId, req.body);
    if (review) {
      return res.status(200).json({ review });
    }
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteReview = async (req, res) => {
  try {
    let deleteReview = await movieService.deleteReview(req.params.reviewId);
    if (!deleteReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    if (deleteReview) {
      res.status(200).json({ Review: deleteReview });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getReview = async (req, res) => {
  try {
    let review = await movieService.getReview(req.params.id);
    if (review) {
      return res.status(200).json({ review });
    }
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAverageRating = async (req, res) => {
  let averageRating = await movieService.getReview(req.params.id, "avg");
  return res.status(200).json({ averageRating });
};

module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovie,
  createReview,
  updateReview,
  deleteReview,
  getReview,
  getAverageRating,
};
