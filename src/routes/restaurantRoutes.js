const express = require("express");
const router = express.Router();
const {
  getAllRestaurants,
  getRestaurantById,
  createNewRestaurant,
  updateRestaurantById,
  deleteRestaurantById,
} = require("../controllers/restaurantController");

//GET /api/v1/restaurants - Get all restaurants
router.get("/", getAllRestaurants);

//GET /api/v1/restaurants/:restaurantId - Get a restaurant by id
router.get("/:restaurantId", getRestaurantById);

//POST /api/v1/restaurants - Create new restaurant
router.post("/", createNewRestaurant);

//PUT /api/v1/restaurants/:restaurantId - Update restaurant by id
router.put("/:restaurantId", updateRestaurantById);

//DELETE /api/v1/restaurants/:restaurantId - Delete restaurant by id
router.delete("/:restaurantId", deleteRestaurantById);

module.exports = router;
