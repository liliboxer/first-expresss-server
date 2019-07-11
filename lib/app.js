const express = require('express');
const app = express();
const animalRoutes = require('./routes/animals');


app.use(express.json());

app.use(animalRoutes);


module.exports = app;
