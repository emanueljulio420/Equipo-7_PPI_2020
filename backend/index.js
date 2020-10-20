'use strict';
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('El mundo de la fisica');
});

app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log('se esta corriendo el mundo de la fisica en el server 3000');
});