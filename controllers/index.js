const { Ride } = require('../models')
const { User } = require('../models')

const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find({})
    return res.status(200).json({ rides })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllUsers = async (req, res) => {
  try {
    const rides = await User.find({})
    return res.status(200).json({ rides })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllRides,
  getAllUsers
}