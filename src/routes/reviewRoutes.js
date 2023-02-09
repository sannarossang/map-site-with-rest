const express = require("express");
const router = express.Router();
const {
  getAllReviews,
  getReviewById,
  createNewReview,
  updateReviewById,
  deleteReviewById,
} = require("../controllers/reviewController");

//REVIEW

//GET /api/v1/reviews - Get all reviews
router.get("/", getAllReviews);

//GET /api/v1/restaurants/:restaurantId/reviews/:reviewId - Get a review by id
router.get("/:reviewId", getReviewById);

//POST /api/v1/reviews - Create new review
router.post("/", createNewReview);

//PUT /api/v1/reviews/:reviewId - Update review by id
router.put("/:reviewId", updateReviewById);

//DELETE /api/v1/reviews/:reviewId - Delete review by id
router.delete("/:reviewId", deleteReviewById);

module.exports = router;

// /restaurants/:callesPizzeria/reviews/:reviewId
// restaurants/:restaurantId/reviews
