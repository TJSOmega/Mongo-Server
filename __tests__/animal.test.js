'use strict';

require('@code-fellows/supergoose');

const Animal = require('../src/models/animals-collection.js')
const Model = require('../src/models/animal-model.js')
const animal = new Animal(Model);

describe('Animal Collection', () => {


  // COMPLETELY SEPARATE TESTS || TEST 1
  it('can create a new animal item', () => {
    let testAnimal = ({ name: 'test animal item', class: 'Dragon', type: 'AQUATIC' })
    let expected = ({ name: 'test animal item', class: 'Dragon', type: 'AQUATIC' })

    return animal.create(testAnimal)
      .then(record => {
        console.log('test animal item in DB', record);
        Object.keys(testAnimal).forEach(key => {
          expect(record[key]).toEqual(expected[key]);
        });
      })
  });

  // TEST 2
  it('can get a animal item', () => {
    let testAnimal = ({ name: 'test animal item', class: 'Dragon', type: 'AQUATIC' })
    let expected = ({ name: 'test animal item', class: 'Dragon', type: 'AQUATIC' })

    return animal.create(testAnimal)
      .then(record => {
        return animal.get(record._id)
          .then(item => {
            Object.keys(testAnimal).forEach(key => {
              // ASSERTION on a single test
              expect(item[key]).toEqual(expected[key]);
            });
          });
      })
  });
});