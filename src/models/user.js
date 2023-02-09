const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    maxLength: 30,
    minLength: 2,
    unique: true,
    // default: true,
  },

  description: {
    type: String,
  },

  password: {
    type: String,
    required: true,
    unique: true,
    minLength: 8,
  },

  // wishList: {
  //   type: [mongoose.Schema.Types.ObjectId],
  //   ref: "Wishlist",
  //   ref: "Restaurant",
  // },

  profilePicture: {
    type: String,
    default: "imageurl.com",
  },
});

module.exports = mongoose.model("User", UserSchema);
