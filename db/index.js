const mongoose = require("mongoose");

let MONGODB_URI = "mongodb://127.0.0.1:27017/themeParkDatabase";

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((e) => {
    console.error("Connection Error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
