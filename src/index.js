const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const consign = require('consign');
const config = require('./config/config');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

consign({ cwd: 'src' })
.include('database')
.then('models')
.then('controllers')
.then('routes')
.into(app)

app.listen(config.PORT);

module.exports = app;
