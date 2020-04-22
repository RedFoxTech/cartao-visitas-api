const passport = require('passport');

module.exports = {
    async create(req, res, next) {
        passport.authenticate('local', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(400).send({ error: 'User not found'})
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                return res.send();
            });
        })(req, res, next);
    }
}