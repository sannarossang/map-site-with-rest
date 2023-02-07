const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
    // maxLength: 50,
    minLength: 2,
    unique: true,
    // default: true,
  },

  description: {
    type: String,
  },

  address: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  score: {
    type: Number,
    required: true,
  },

  restaurantPicture: {
    type: String,
    default: "imageurl.com",
  },
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
