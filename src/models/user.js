const {
    Schema,
    model
} = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const bcrypt = require('bcrypt-nodejs')

module.exports = () => {
    const UserSchema = new Schema({
        googleId: {
            type: String
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            select: false
        },
        office: {
            type: String,
        },
        phone: {
            type: String,
        },
        color: {
            type: String,
            default: '#252C8F'
        },
        image: {
            type: String,
        },
        logo: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

    UserSchema.pre('save', async function (next) {
        var hash = bcrypt.hashSync(this.password);

        this.password = hash;

        next();
    });

    UserSchema.plugin(findOrCreate);

    return model('User', UserSchema);
}