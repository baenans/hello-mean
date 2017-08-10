const express     = require('express');
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');
const logger      = require('morgan');
const router      = require('./router/router.js');
const app         = express();
const defaultPort = 8080;
// Database
mongoose.connect(process.env.DATABASE_URL);

// Middleware
app.use(express.static(__dirname + '/public'));  // Serve Static files
app.use(logger('dev'));
app.use(bodyParser.json());  // POST
app.use(bodyParser.urlencoded({extended: false}));
router(app);

// Launch server
app.listen(process.env.PORT || defaultPort, function() {  
  console.log('App listening on port ' + process.env.PORT);
});