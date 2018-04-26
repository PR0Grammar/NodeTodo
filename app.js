var express = require('express');
var mongoose = require('mongoose');
var config = require('./config');

var port = process.env.PORT || 3030;
var app = express();

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'pug');
mongoose.connect(config.getDbConnectionString);

app.listen(port);
