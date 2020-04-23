const express = require('express');

const ScheduleController = require('../controllers/ScheduleController');

const router = express.Router();

router.get('/:userId', ScheduleController.index);
router.put('/:userId', ScheduleController.update);

module.exports = app => app.use('/schedule', router);