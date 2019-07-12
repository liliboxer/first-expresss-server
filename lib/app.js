const express = require('express');
const app = express();
const animalRoutes = require('./routes/animals');


app.use(express.json());

const logger = (req, res, next) => {
  req.hello = 'hi';
  console.log(req.method);
  console.log(req.path);
  next();
};

app.use(logger);

app.use((req, res, next) => {
  console.log(req.hello);
  next();
});

app.use('/api/v1/animals', animalRoutes);


module.exports = app;
