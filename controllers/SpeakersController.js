const Speakers = require('../models/Speakers.js');

exports.list = (req, res) => {
  Speakers.find(function(err, todos) {
    if(err) res.send(err);
    res.json(todos);
  });
};

exports.create = (req, res) => {
  console.log(req.body);
  Speakers.create({
    name: req.body.name,
    technologies: req.body.technologies
  },
  function(err){
    if(err) res.send(err);
    Speakers.find(function(err, todos) {
      if(err) res.send(err);
      res.json(todos);
    });
    
  });
};


exports.retrieve = (req, res) => {
  Speakers.findOne({
    _id: req.params.speaker
  },function(err, todos) {
    if(err) res.send(err);
    res.json(todos);
  });
};

/**
(todo): implement missing ops: 

collection: replace, delete
member: replace, update, delete
*/

