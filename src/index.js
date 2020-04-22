var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

const config = require('./config/config');

var app = express();

require('./config/auth')(passport);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(passport.initialize());
app.use(session({
    secret: '2e3817293fc275dbee74bd71ce6eb056'
}));
app.use(passport.session());

require('./config/auth')(passport);

require('./routes/user')(app);
require('./routes/session')(app);


app.listen(config.PORT);


module.exports = app;