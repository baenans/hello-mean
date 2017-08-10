const express = require('express');
const SpeakersController = require('../controllers/SpeakersController.js');

module.exports = (app) => {
  const apiRoutes = express.Router();

  app.use('/api', apiRoutes);

  apiRoutes.get('/speakers', SpeakersController.list);
  apiRoutes.post('/speakers', SpeakersController.create);
  apiRoutes.get('/speakers/:speaker', SpeakersController.retrieve);
};