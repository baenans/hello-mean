const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const router = require("./router/router.js");
const app = express();


// DB Connection
mongoose.connect(process.env.DATABASE_URL)
  .then(function(db){

}).catch(function(err){
  console.log(err);
});

/**
* CONFIG
*/
app.use(express.static(__dirname + '/public'));  // Serve Static files
app.use(logger('dev'));
app.use(bodyParser.json());  // POST
app.use(bodyParser.urlencoded({extended: false}));


router(app);
// RUN server in 8080
app.listen(process.env.PORT, function() {  
    console.log('App listening on port ' + process.env.PORT);
});