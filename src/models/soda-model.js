'use strict';
// pull in mongoose so that we can create a db schema (aka blueprint for our data)
const mongoose = require('mongoose')

// Create a new Mongoose schema with a set of properties and constraints.
const mainSchema = mongoose.Schema({
  name: {type: String, required: true}, // MUST be a string and provided (required)
  calories: {type: Number, required: true},
  type: {type: String, uppercase: true, enum: ['SAVANNA', 'JUNGLE', 'AQUATIC']}

});


// create a mongoose model -> in the db, and creates a collection
const SodaModel = mongoose.model('soda', mainSchema)


module.exports = SodaModel

// let animal = {name: apple, calories: 500, type: HAS TO MATCH TYPE ABOVE EXACTLY} 

// DB Validation when you dont add something that matches constraints you will get a ValidationError!

// Constraints are types of data your DB can receive.

// Data constraints protect you for Data integrity and from malicious attacks