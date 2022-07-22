const db = require("../db");
const Chance = require("chance");
const { Review, User } = require("../models");

const chance = new Chance();

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const createUsersWithReviews = async (reviews) => {
  console.log(reviews);
  let lenOfItems = 100;
  const users = [...Array(lenOfItems)].map((user) => {
    // const selectedReviews = reviews.splice(0, reviews.length / lenOfItems);
    return {
      first_name: chance.first(),
      last_name: chance.last(),
      email: chance.email(),
      review: [{ coasterID: "", rating: "", comment: "" }],
      // review: selectedReviews.map((review) => review._id),
    };
  });
  await User.insertMany(users);
  console.log("Created Users with Reviews!");
};

const run = async () => {
  await createUsersWithReviews();
  db.close();
};

run();
