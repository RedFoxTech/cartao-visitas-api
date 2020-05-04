const {
    Schema,
    model
} = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

module.exports = () => {
    const BusinessCardSchema = new Schema({
        name: String,
        company: String,
        office: String,
        email: String,
        phone: String,
        image: String,
        logo: String,
        tags: [{
            type: Schema.Types.ObjectId,
            ref: 'Tag',
            default: []
        }],
        notes: {
            type: String,
            default: ''
        }
    });

    BusinessCardSchema.plugin(findOrCreate);

    return model('businesscard', BusinessCardSchema);
}