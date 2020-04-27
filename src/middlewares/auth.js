const passport = require('passport');
const {
    ExtractJwt,
    Strategy
} = require('passport-jwt');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = (app) => {
    const Users = app.models.user;
    const { JWT_SECRET, GOOGLE_CLIENT_ID, GOOGLE_SECRET } = app.config.config;

    const options = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: JWT_SECRET
    }

    passport.use(new Strategy(options, (payload, done) => {
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
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_SECRET,
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

    app.use(passport.initialize());

    return passport;
}