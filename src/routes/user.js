module.exports = app => {
    const UserController = app.controllers.UserController;

    app.get('/users', UserController.index);
    app.post('/users', UserController.create);
    app.put('/users/:userId', UserController.update);
    app.delete('/users/:userId', UserController.delete);
}
