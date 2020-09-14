const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const MONGODB_URI =
    'mongodb+srv://admin:twistandshout@cluster0.haguo.mongodb.net/test?retryWrites=true&w=majority';

// establish database connection
mongoose.connect('mongodb://localhost/hammeringkeys-main', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
});

// express configuration
app.use(morgan('tiny')); // activate request logging
app.use(bodyParser.json());

// use api routes
app.use('/', routes);

// listen on designated port
app.listen(PORT, console.log(`Server is starting at ${PORT}`));
