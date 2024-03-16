// authRoutes.js
const express = require("express");
const movieController = require("../controllers/movieController");
const authenticateMiddleware = require("../middleware/authenticateToken")
const router = express.Router();

router.post(
  "/",
  authenticateMiddleware,
  movieController.createMovie
);

module.exports = router;
