const Ride = require('../models/ride')
const User = require('../models/user')

const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find()
    return res.status(200).json({ rides })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllRides
}