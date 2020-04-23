const mongoose = require('../database');

const ScheduleSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card',
        required: true
    }]
});

const Schedule = mongoose.model('Schedule', ScheduleSchema);

module.exports = Schedule;