const { Schema, model } = require('mongoose');

module.exports = () => {
    const BusinessCardSchema = new Schema({
        fullName: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        jobTitle: {
            type: String,
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        email: {
            type: String,
            required: true
        },
        location: String,
        website: String,
        tags: {
            type: [{
                type: Schema.Types.ObjectId,
                ref: 'Tag'
            }],
            default: []
        },
        notes: {
            type: String,
            default: ''
        }
    });

    return model('businesscard', BusinessCardSchema);
}