const db = require("../db");
const Chance = require("chance");
const { Ride } = require("../models");

const chance = new Chance();

db.on("error", console.error.bind(console, "MongoDB Connection Error:"));

const main = async () => {
  const rides = [
    {
      name: "Corkscrew",
      description: "A wild ride with multiple loops",
      image: "https://i.imgur.com/Bzu7ei6.png",
      park: "Dynamite Dunes",
      rating: chance.floating({ min: 3, max: 5, fixed: 1 }), //({ numeric: true }),
    },
    {
      name: "Crazy Carts",
      description: "A virginia reel ride.",
      image: "https://i.imgur.com/glwlgXP.png",
      park: "Fun Fortress",
      rating: chance.floating({ min: 3, max: 5, fixed: 1 }), //({ numeric: true }),
    },
    {
      name: "Demon Drop",
      description: "A dingy slide ride with an intense drop.",
      image: "https://i.imgur.com/QZip2tY.png",
      park: "Octagon",
      rating: chance.floating({ min: 3, max: 5, fixed: 1 }), //({ numeric: true }),
    },
    {
      name: "Desert Eagle",
      description: "A speedy right with intense turns",
      image: "https://i.imgur.com/i74u3vA.png",
      park: "Dynamite Dunes",
      rating: chance.floating({ min: 3, max: 5, fixed: 1 }), //({ numeric: true }),
    },
    {
      name: "Dynamite Blaster",
      description: "An immersive ride full of secret sights",
      image: "https://i.imgur.com/LFAB2QE.png",
      park: "Dynamite Dunes",
      rating: chance.floating({ min: 3, max: 5, fixed: 1 }), //({ numeric: true }),
    },
    {
      name: "Knights Of Ni",
      description: "A multilevel ride full of drops and turns",
      image: "https://i.imgur.com/yAKmMFJ.png",
      park: "Fun Fortress",
      rating: chance.floating({ min: 3, max: 5, fixed: 1 }), //({ numeric: true }),
    },
    {
      name: "Loggers Revenge",
      description: "A water ride guarenteed to leave you soaked!",
      image: "https://i.imgur.com/EFOnkI7.png",
      park: "Forest Frontiers",
      rating: chance.floating({ min: 3, max: 5, fixed: 1 }), //({ numeric: true }),
    },
    {
      name: "Looper",
      description:
        "A fast Ride With a corksrewing loop guarenteed to make your head spin!",
      image: "https://i.imgur.com/ePgNvlZ.png",
      park: "Octagon",
      rating: chance.floating({ min: 3, max: 5, fixed: 1 }), //({ numeric: true }),
    },
    {
      name: "Reddington",
      description: "A very large with a huge drops,twists, and turns!",
      image: "https://i.imgur.com/jAg7NI0.png",
      park: "Octagon",
      rating: chance.floating({ min: 3, max: 5, fixed: 1 }), //({ numeric: true }),
    },
    {
      name: "Steeplechase",
      description: "A horse race themed rollercoaster.",
      image: "https://i.imgur.com/75wDVbv.png",
      park: "Fun Fortress",
      rating: chance.floating({ min: 3, max: 5, fixed: 1 }), //({ numeric: true }),
    },
    {
      name: "Terminator",
      description: "An extremely intense ride full of loops.",
      image: "https://i.imgur.com/5Ei9m9b.png",
      park: "Octagon",
      rating: chance.floating({ min: 3, max: 5, fixed: 1 }), //({ numeric: true }),
    },
    {
      name: "Woodchip",
      description: "Old wooden rollercoaster with a scenic view",
      image: "https://i.imgur.com/Z6eEijX.png",
      park: "Forest Frontiers",
      rating: chance.floating({ min: 3, max: 5, fixed: 1 }), //({ numeric: true }),
    },
  ];
  await Ride.insertMany(rides);
  console.log("Created Some Rides!");
};
const run = async () => {
  await main();
  db.close();
};

run();
