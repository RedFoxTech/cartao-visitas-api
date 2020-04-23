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
        email: {
            type: String,
            required: true
        },
        location: String,
        website: String,
        tags: {
            type: [String],
            default: []
        },
        notes: {
            type: String,
            default: ''
        }
    });

    return model('businesscard', BusinessCardSchema);
}