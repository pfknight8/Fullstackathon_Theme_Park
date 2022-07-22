const { Schema } = require("mongoose");

const RideSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    park: { type: String, required: true },
    rating: { type: String, required: true},
  },
  { timestamps: true }
);

module.exports = RideSchema