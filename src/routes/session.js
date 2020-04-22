const express = require('express');
const passport = require('passport');

const SessionController = require('../controllers/SessionController');

const router = express.Router();

router.post('/', SessionController.authLocal);
router.get('/google', passport.authenticate('google', {
    scope:['profile', 'email']
}));
router.get('/google/callback', passport.authenticate('google'),
    function (req, res) {
        res.send()
    }
)

module.exports = app => app.use('', router)