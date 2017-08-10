const mongoose = require('mongoose');

var Speaker = mongoose.model('Speaker', {  
    name: String
});

module.exports = Speaker;