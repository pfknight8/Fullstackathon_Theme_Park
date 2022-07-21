const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Ride = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    park: { type: String, required: true },
  },
  { timestamps: true }
);
