const express = require('express');
const app = express();
const animalRoutes = require('./routes/animals');


app.use(express.json());

app.use('/api/v1/animals', animalRoutes);


module.exports = app;
