const express = require('express');

const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', UserController.index);
router.post('/', UserController.create);
router.put('/:userId', UserController.update);
router.delete('/:userId', UserController.delete);


module.exports = app => app.use('/users', router)
