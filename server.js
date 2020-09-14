const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const MONGODB_URI =
    'mongodb+srv://admin:twistandshout@cluster0.haguo.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect('mongodb://localhost/hammeringkeys-main', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
});

app.use(morgan('tiny'));
app.use('/', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
