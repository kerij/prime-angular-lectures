var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var things = require('./routes/thing');
var customers = require('./routes/customers');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Serve back static files
// app.use('/public', express.static(path.join(__dirname, './public')));
app.use('/public', express.static(__dirname + '/public/'));

// Routes
app.use('/things', things);
app.use('/customers', customers);

// Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
})

var server = app.listen(process.env.PORT || 3000, function () {
  // this function is a callback
  // using 'server' in here works b/c of Closure
  console.log('Listening on port %d ', server.address().port);
});
