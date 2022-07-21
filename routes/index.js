const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.get('/rides', controllers.getAllRides)

router.get('/users', controllers.getAllUsers)

module.exports = router