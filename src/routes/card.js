module.exports = app => {
    
    const card = app.controllers.CardController;
    const auth = app.config.auth;

    app.get('/business-card/:id', card.show);
    app.get('/business-card', card.index);
    app.post('/business-card/', auth.authJwt, card.create);
    app.put('/business-card/', auth.authJwt, card.update);
    app.delete('/business-card/:id', auth.authJwt, card.remove);

}