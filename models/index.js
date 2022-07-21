const { model } = require("mongoose");
const UserSchema = require("./user");
const RideSchema = require("/ride");

const User = model("User", UserSchema);
const Ride = model("Ride", RideSchema);

module.exports = {
  User,
  Ride,
};
