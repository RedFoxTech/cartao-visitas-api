const { Schema, model } = require('mongoose');

const findOrCreate = require('mongoose-findorcreate');

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

    TagSchema.plugin(findOrCreate);

    return model('Tag', TagSchema);
}