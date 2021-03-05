'use strict';

const express = require('express');

const Animals = require('../models/animals-collection')

const Model = require('../models/animal-model')

const animals = new Animals(Model)


const router = express.Router()

router.get('/animals', getAnimals)
router.get('/animals/:id', getOneAnimals)
router.post('/animals', createAnimals)
router.put('/animals/:id', updateAnimals)
router.delete('/animals/:id', deletedAnimals)





async function getAnimals(req, res) {
  let allAnimals = await animals.get();
  res.status(200).json(allAnimals);
}

async function getOneAnimals(req, res) {
  const id = req.params.id;
  console.log(id)
  let oneAnimal = await animals.get(id);
  res.status(200).json(oneAnimal);
}

async function createAnimals(req, res)  {
  const item = req.body;
  let newAnimal = await animals.create(item);
  res.status(201).json(newAnimal);
}

async function updateAnimals(req, res) {
  const id = req.params.id;
  const item = req.body;
  let updatedAnimal = await animals.update(id, item);
  res.status(200).json(updatedAnimal);
}

async function deletedAnimals(req, res) {
  let id = req.params.id;
  let deleteAnimal = await animals.delete(id);
  res.status(200).json(null);
}


module.exports = router;