module.exports = app => {
    const TagsControllers = app.controllers.TagsController;
    const passport = app.middlewares.auth;

    app.all('/tags', passport.authenticate('jwt', { session: false }));
    app.all('/tags/:id', passport.authenticate('jwt', { session: false }));

    app.get('/tags', TagsControllers.index);
    app.post('/tags', TagsControllers.create);
    app.delete('/tags/:id', TagsControllers.remove);
    app.put('/tags/:id', TagsControllers.update);
}