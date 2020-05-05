module.exports = app => {
    
    const card = app.controllers.CardController;
    const passport = app.middlewares.auth;

    app.all('/business-card', passport.authenticate('jwt', { session: false }));
    app.all('/business-card/:id', passport.authenticate('jwt', { session: false }));

    app.get('/business-card/:id', card.show);
    app.put('/business-card/:id', card.update);
    app.delete('/business-card/:id', card.remove);

}