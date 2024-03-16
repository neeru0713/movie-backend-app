const { Movie } = require("../models/Movie.js");

async function createMovie(userBody) {
  //   console.log("User body: ", userBody);

  try {
    const newMovie = new Movie(userBody);
console.log(userBody)
    const result = await newMovie.save();
    return result;
  } catch (error) {
    console.error("Error creating movie: ", error.message);
    throw error;
  }
}

module.exports = {
  createMovie
};
