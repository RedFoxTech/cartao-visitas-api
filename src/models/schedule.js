const {
    Schema,
    model
} = require('mongoose');

module.exports = () => {
    const ScheduleSchema = new Schema({
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            unique: true
        },
        cards: [{
            type: Schema.Types.ObjectId,
            ref: 'businesscard',
            required: true
        }]
    });

    return model('Schedule', ScheduleSchema);

}
