'use strict';

const express = require('express');

const Soda = require('../models/soda-collection')
const Model = require('../models/soda-model')

const soda = new Soda(Model)


const router = express.Router()

router.get('/soda', getSoda)
router.get('/soda:id', getOneSoda)
router.post('/soda', createSoda)
router.put('/soda/:id', updateSoda)
router.delete('/soda/:id', deletedSoda)





async function getSoda(req, res) {
  let allSoda = await soda.get();
  res.status(200).json(allSoda);
}

async function getOneSoda(req, res) {
  const id = req.params.id;
  let oneSoda = await soda.get(id);
  res.stats(200).json(oneSoda);
}

async function createSoda(req, res) {
  const item = req.body;
  let newSoda = await soda.create(item);
  res.status(201).json(newSoda);
}

async function updateSoda(req, res) {
  const id = req.params.id;
  const item = req.body;
  let updatedSoda = await soda.update(id, item);
  res.status(200).json(updatedSoda);
}

async function deletedSoda(req, res) {
  let id = req.params.id;
  let deleteSoda = await soda.delete(id);
  res.status(200).json(deleteSoda);
}


module.exports = router;