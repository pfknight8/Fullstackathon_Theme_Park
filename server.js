const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const db = require('./db')
const routes = require('./routes')

const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.use('/', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error!'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))