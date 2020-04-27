require('dotenv/config');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const consign = require('consign');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

consign({ cwd: 'src' })
.include('config')
.then('database')
.then('models')
.then('middlewares')
.then('controllers')
.then('routes')
.into(app)

app.listen(process.env.PORT);

module.exports = app;