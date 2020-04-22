module.exports = app => {
    const SessionController = app.controllers.SessionController;
    const auth = app.config.auth;

    app.post('/login', SessionController.create);
    app.get('/teste', auth.authenticate, (req, res) => res.json({ ok: true }));
}
