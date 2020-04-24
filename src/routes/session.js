module.exports = app => {
    const SessionController = app.controllers.SessionController;
    const auth = app.config.auth;

    app.post('/login', SessionController.create);
    app.get('/teste', auth.authJwt, (req, res) => res.json({
        user: req.user
    }));
    app.get('/google', auth.authGoogle);
    app.get('/google/callback', auth.authenticate, (req, res) => {
        res.json({ user: req.user });
    })

}