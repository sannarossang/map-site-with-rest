const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    reviewText: {
      type: String,
      required: true,
      minLength: 30,
      maxLength: 300,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    score: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5],
      default: 5,
    },
    likeRatio: {
      type: Number,
    },
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", ReviewSchema);
