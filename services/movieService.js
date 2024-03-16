const { Movie } = require("../models/Movie.js");

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

module.exports = {
  createMovie,
  updateMovie,
};
