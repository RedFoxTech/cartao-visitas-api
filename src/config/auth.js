const bcrypt = require('bcrypt-nodejs');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

module.exports = function (passport) {
    async function findUser(email, callback) {
        await User.findOne({
            email
        }, function (err, doc) {
            callback(err, doc);
        }).select('+password');
    }

    async function findUserById(id, callback) {
        const ObjectId = require("mongodb").ObjectId;
        await User.findOne({
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
                    return done(null, false, {
                        message: 'User not found'
                    })
                }

                // comparando as senhas
                bcrypt.compare(password, user.password, (err, isValid) => {
                    if (err) {
                        return done(err)
                    }
                    if (!isValid) {
                        return done(null, false, {
                            message: 'Incorrect password'
                        })
                    }
                    return done(null, user)
                })
            })
        }
    ));
    
    passport.use(new GoogleStrategy({
            clientID: "803713707151-cv38nd7i4913k6l0s4vino3p37p50qns.apps.googleusercontent.com",
            clientSecret: "bPB_Ozd6Sjkdprt_LMlBYE7w",
            callbackURL: "http://localhost:3000/google/callback"
        },
        function (accessToken, refreshToken, profile, done) {
            
            User.findOrCreate({
                googleId:profile.id,
                name:profile._json.name,
                email:profile._json.email
            }, function (err, user) {
                return done(err, user);
            });
        }
    ));
}