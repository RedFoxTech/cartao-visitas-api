module.exports = app => {
    const UserController = app.controllers.UserController;
    const auth = app.config.auth;

    app.get('/users', auth.authJwt, UserController.show);
    app.post('/users', UserController.create);
    app.put('/users/:userId', auth.authJwt, UserController.update);
    app.delete('/users/:userId', auth.authJwt, UserController.delete);
}