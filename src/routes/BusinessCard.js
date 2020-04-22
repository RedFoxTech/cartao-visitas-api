module.exports = app => {
    
    const businessCard = app.controllers.BusinessCard;

    app.get('/business-card/:id', businessCard.show);
    app.get('/business-card', businessCard.index);
    app.post('/business-card', businessCard.create);
    app.put('/business-card/:id', businessCard.update);
    app.delete('/business-card/:id', businessCard.remove);

}