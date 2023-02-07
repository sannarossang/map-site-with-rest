require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const {
  getAllReviews,
  getReviewById,
  createNewReview,
  updateReviewById,
  deleteReviewById,
} = require("./controllers/reviewController");
const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
} = require("./controllers/userController");
const {
  getAllRestaurants,
  getRestaurantById,
  createNewRestaurant,
  updateRestaurantById,
  deleteRestaurantById,
} = require("./controllers/restaurantController");

const reviewRoutes = require("./routes/reviewRoutes");
const userRoutes = require("./routes/userRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");

const app = express();

app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/restaurants", restaurantRoutes);

const port = process.env.PORT;
async function run() {
  try {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

run();
