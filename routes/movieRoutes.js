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

router.post("/:id/reviews", authenticateMiddleware, movieController.createReview)
router.put("/:id/reviews/:reviewId", authenticateMiddleware, movieController.updateReview)
router.delete("/:id/reviews/:reviewId", authenticateMiddleware, movieController.deleteReview)
router.get("/:id/reviews", authenticateMiddleware, movieController.getReview)
router.get("/:id/averageRating", authenticateMiddleware, movieController.getAverageRating)


module.exports = router;
