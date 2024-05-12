const express = require('express');
const path = require('path');
const hbs = require('hbs');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));


app.use(express.static(path.join(__dirname, 'public')))

app.use('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

module.exports = app;