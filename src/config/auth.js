const bcrypt = require('bcrypt-nodejs')
const LocalStrategy = require('passport-local').Strategy

const User = require('../models/user');

module.exports = function (passport) {
    function findUser(email, callback) {
        User.findOne({
            email
        }, function (err, doc) {
            callback(err, doc);
        }).select('+password');
    }

    function findUserById(id, callback) {
        const ObjectId = require("mongodb").ObjectId;
        User.findOne({
            _id: ObjectId(id)
        }, (err, doc) => {
            callback(err, doc);
        });
    }

    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {
        findUserById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        (email, password, done) => {
            findUser(email, (err, user) => {
                if (err) {
                    return done(err)
                }

                // usuário inexistente
                if (!user) {
                    return done(null, false, { message: 'User not found'})
                }

                // comparando as senhas
                bcrypt.compare(password, user.password, (err, isValid) => {
                    if (err) {
                        return done(err)
                    }
                    if (!isValid) {
                        return done(null, false, { message: 'Incorrect password'})
                    }
                    return done(null, user)
                })
            })
        }
    ));
}