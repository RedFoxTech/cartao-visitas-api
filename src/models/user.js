const {
    Schema,
    model
} = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const Schedule = app.models.schedule;

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
        schedule: {
            type: Schema.Types.ObjectId,
            ref: 'Schedule'
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

    UserSchema.post('save', async function (){
        return Schedule.create({ userId: this });
    })

    UserSchema.plugin(findOrCreate);
    
    return model('User', UserSchema);
}