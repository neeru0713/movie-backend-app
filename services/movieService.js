const { Movie } = require("../models/Movie.js");
const { Review } = require("../models/Review.js");

async function createMovie(body) {
  //   console.log("User body: ", userBody);

  try {
    const newMovie = new Movie(body);
    const result = await newMovie.save();
    return result;
  } catch (error) {
    console.error("Error creating movie: ", error.message);
    throw error;
  }
}
const updateMovie = async (movieId, body) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, body, {
      new: true,
    });
    return updatedMovie;
  } catch (error) {
    console.error("Error updating movie: ", error.message);
  }
};

const deleteMovie = async (movieId) => {
  try {
    console.log("oihi", movieId);
    const deleteMovie = await Movie.findByIdAndDelete(movieId);
    return deleteMovie;
  } catch (error) {
    console.error("Error deleting movie: ", error.message);
  }
};

const getMovie = async (movieId, filter) => {
  try {
    let movie;
    if (movieId) {
      movie = await Movie.findOne({ _id: movieId }).populate("reviews");
    } else {
      movie = await Movie.find(filter).populate("reviews");
    }

    return movie;
  } catch (error) {
    console.error("Error getting movie: ", error.message);
  }
};

const createReview = async (movieId, reviewBody) => {
  try {
    console.log(movieId, reviewBody);
    const movie = await Movie.findOne({ _id: movieId });
    const newReview = new Review(reviewBody);
    const review = await newReview.save();
    movie.reviews.push(review);
    await movie.save();
    return review;
  } catch (error) {
    console.error("Error creating Review : ", error.message);
  }
};

const updateReview = async (reviewId, reviewBody) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(reviewId, reviewBody, {
      new: true,
    });
    return updatedReview;
  } catch (error) {
    console.error("Error updating Review : ", error.message);
  }
};

const deleteReview = async (reviewId) => {
  try {
    const deleteReview = await Review.findByIdAndDelete(reviewId);
    return deleteReview;
  } catch (error) {
    console.error("Error deleting Review : ", error.message);
  }
};

const getReview = async (movieId, whichApi) => {
  try {
    const movie = await Movie.findOne({ _id: movieId }).populate("reviews");

    const review = movie.reviews;

    if (whichApi === "avg") {
      let totalRating = 0;
      for (let i = 0; i < review.length; i++) {
        totalRating += review[i].rating;
      }
      const averageRating = totalRating / review.length;
      return averageRating;
    } else {
      return review;
    }
  } catch (error) {
    console.error("Error gettting Review : ", error.message);
  }
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
};
