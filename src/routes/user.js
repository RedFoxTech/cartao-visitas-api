module.exports = app => {
    const UserController = app.controllers.UserController;
    const passport = app.middlewares.auth;

    app.all('/users/:userId', passport.authenticate('jwt', { session: false }));

    app.get('/users', passport.authenticate('jwt', { session: false }), UserController.index);
    app.post('/users', UserController.create);
    app.put('/users/:userId', UserController.update);
    app.delete('/users/:userId', UserController.delete);
}