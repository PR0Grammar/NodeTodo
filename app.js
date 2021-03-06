const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/helper');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');

const port = process.env.PORT || 3030;
const app = express();

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'pug');

mongoose.connect(config);

setupController(app);
apiController(app);

app.listen(port);
