const express = require('express');
const SpeakerController = require('../controllers/SpeakerController.js');
// Controllers


module.exports = (app) => {
  const apiRoutes = express.Router();

  app.use('/api', apiRoutes);

  apiRoutes.get('/speaker', SpeakerController.getSpeakers);
}