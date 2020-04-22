const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');

const opt = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}

module.exports = (app) => {
    const users = app.models.user;

    passport.use(new Strategy(opt, (payload, done) => {
        users.findOne({ _id: payload.id }).then(user => {
            if(user)
                return done(null, user);
            
            return done(null, false);
        }).catch(err => {
            return done(err, false);
        });
    }));

    return {
        authenticate: passport.authenticate('jwt', { session: false }),
        initialize: passport.initialize()
    }
}