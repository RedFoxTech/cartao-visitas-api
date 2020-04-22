const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt-nodejs')

module.exports = () => {
    const UserSchema = new Schema({
        name:{
            type: String,
            require: true,
        },
        email:{
            type: String,
            require: true,
            unique: true,
            lowercase: true
        },
        password:{
            type: String,
            require: true,
            select: false
        },
        office:{
            type: String,
            require: true
        },
        phone:{
            type: String,
            require: true
        },
        color:{
            type: String,
            require: false,
            default: '#252C8F'
        },
        image:{
            type: String,
            require: false
        },
        logo:{
            type: String,
            require: false
        },
        createdAt:{
            type: Date,
            default: Date.now
        }
    });

    UserSchema.pre('save', async function (next) {
        var hash = bcrypt.hashSync(this.password);
       
        this.password = hash;
    
        next();
    });
    
    return model('User', UserSchema);
}