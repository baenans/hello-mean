const mongoose = require('mongoose');


var Speaker = new mongoose.Schema({
  name          :  {type: String, index: true},
  id            :  mongoose.Schema.ObjectId,
  technologies  :  [String]
});

var Speakers = mongoose.model('Speakers', Speaker);

module.exports = Speakers;