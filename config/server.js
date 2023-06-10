const express = require('express');
const app = express();
const consign = require('consign')
const bodyParser = require('body-parser')
//vinicius stefanes 5v

app.set('view engine', 'ejs');
app.set('views', './app/views');

const expressValidator = require('express-validator');

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

consign().include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);
module.exports = app;