const { Router } = require('express');

//make database
const animals = [];

module.exports = Router()
  .post('/api/v1/animals', (req, res) => {
    // what we receive 
    const { 
      name, 
      legs, 
      fluffy 
    } = req.body;

    // create animal to store 
    const animal = { 
      name, 
      legs, 
      fluffy 
    };
    
    animals.push(animal);
    res.send(animal);

  })
  
  .get('/api/v1/animals', (req, res) => {
    res.send(animals);
  })

  .get('/api/v1/animals/:id', (req, res) => {
    res.send(animals[req.params.id]);
  })

  .put('/api/v1/animals/:id', (req, res) => {
    // deconstructed new info 
    const {
      name,
      legs,
      fluffy
    } = req.body;

    // made new item 
    const updatedAnimal = {
      name, 
      legs,
      fluffy
    };

    // set the updated animal to be at the index of the original animal 
    animals[req.params.id] = updatedAnimal;
  });

