'use strict';
// Dependencies Supergoose mongoose jest express

const mongoose = require('mongoose')
const model = require('./src/models/animal-model.js')
const server = require('./src/server.js')
const PORT = process.env.PORT || 3333

//Env variable in the future
const MONGODB_URI = 'mongodb://localhost:27017/mongo-db-demo';

const options = {useNewUrlParser :true, useUnifiedTopology: true}; // These are always used


// CLARITY!
// MONGODB is the DBMS
//mongoose is the ORM that connects between the Database and App



mongoose.connect(MONGODB_URI, options)
.then(() => {
  server.start(PORT)
})



