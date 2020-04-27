const jwt = require('jsonwebtoken');

module.exports = app => {
    const SessionController = app.controllers.SessionController;
    const passport = app.middlewares.auth;
    const { JWT_SECRET } = app.config.config;

    app.post('/login', SessionController.create);
    app.get('/google', passport.authenticate(
        'google', 
        { scope: ['profile', 'email'], session: false }
    ));

    app.get('/google/callback', passport.authenticate('google', {session: false}), (req, res) => {
        const token = jwt.sign({ id: req.user._id }, JWT_SECRET);
        res.json({ token });
    });
}