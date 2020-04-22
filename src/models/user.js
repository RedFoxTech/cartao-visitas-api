const mongoose = require('../database/index');
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new mongoose.Schema({
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

const User = mongoose.model('User', UserSchema);

module.exports = User;