'use strict' // faz vc lembrar de colocar virgula ou ate da erro caso não colocar

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//Carrega as rotas
const indexRoute = require('./routes/index-route.js');
const productRoute = require('./routes/product-route.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;