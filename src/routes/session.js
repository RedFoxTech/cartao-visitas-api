const express = require('express');

const SessionController = require('../controllers/SessionController');

const router = express.Router();

router.post('/', SessionController.create);

module.exports = app => app.use('/login', router)
