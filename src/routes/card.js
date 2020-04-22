module.exports = app => {
    
    const card = app.controllers.CardController;

    app.get('/business-card/:id', card.show);
    app.get('/business-card', card.index);
    app.post('/business-card', card.create);
    app.put('/business-card/:id', card.update);
    app.delete('/business-card/:id', card.remove);

}