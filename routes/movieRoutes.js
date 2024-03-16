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

router.put(
  "/:id",
  authenticateMiddleware,
  movieController.updateMovie
);

router.delete(
  "/:id",
  authenticateMiddleware,
  movieController.deleteMovie
);

router.get(
  "/:id?",
  movieController.getMovie
);

module.exports = router;
