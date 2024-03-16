const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    rating: Number,
    reviewText: String,
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = { Review };
