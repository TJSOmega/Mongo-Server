'use strict'

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3333

const notFound = require('./error-handlers/500.js')
const errorHandler = require('./error-handlers/404.js')
const animalRoutes = require('./routes/animals.js')
const sodaRoutes = require('./routes/soda.js')
const logger = require('./middleware/logger.js')

app.use(express.json());

app.use(logger)

app.use(animalRoutes)
app.use(sodaRoutes)


app.use('*', notFound)
app.use(errorHandler)



module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port') }
    app.listen(port, () => {
      console.log(`Listening to ${port}`)
    })
  }

};