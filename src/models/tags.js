const { Schema, model } = require('mongoose');

module.exports = () => {
    const TagSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true
        }
    });

    return model('Tag', TagSchema);
}