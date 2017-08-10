const Speaker = require("../models/Speaker.js");

exports.getSpeakers = (req, res) => {
  Speaker.find(function(err, todos) {
    if(err) {
        res.send(err);
    }
    res.json(todos);
  });
};