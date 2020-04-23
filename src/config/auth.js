const passport = require('passport');
const {
    ExtractJwt,
    Strategy
} = require('passport-jwt');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const opt = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}

module.exports = (app) => {
    const Users = app.models.user;

    passport.use(new Strategy(opt, (payload, done) => {
        Users.findOne({
            _id: payload.id
        }).then(user => {
            if (user)
                return done(null, user);

            return done(null, false);
        }).catch(err => {
            return done(err, false);
        });
    }));

    passport.use(new GoogleStrategy({
            clientID: "803713707151-cv38nd7i4913k6l0s4vino3p37p50qns.apps.googleusercontent.com",
            clientSecret: "bPB_Ozd6Sjkdprt_LMlBYE7w",
            callbackURL: "http://localhost:3000/google/callback"
        },
        function (accessToken, refreshToken, profile, done) {

            Users.findOrCreate({
                googleId: profile.id,
                name: profile._json.name,
                email: profile._json.email
            }, function (err, user) {
                return done(err, user);
            });
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });


    app.use(passport.initialize())
    return {
        authenticate: passport.authenticate('google'),
        authGoogle: passport.authenticate('google', {
            scope: ['profile', 'email']
        }),
        authJwt: passport.authenticate('jwt', {
            session: false
        })
    }
}