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

// const putUserPost = async (req, res) => {
//   try {
//     const { id } = req.params
//     const users = await User.find({id: id}, req.body)
//     return res.status(200).json({ users })
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

const postNewRide = async (req, res) => {
  try {
    const ride = await new Ride(req.body)
    await ride.save()
    return res.status(200).json({ ride })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllRides,
  getAllUsers,
  postNewRide
}