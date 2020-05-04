module.exports = app => {

    const card = app.controllers.CardController;
    const passport = app.middlewares.auth;

    app.all('/business-card', passport.authenticate('jwt', {
        session: false
    }));
    app.all('/business-card/:id', passport.authenticate('jwt', {
        session: false
    }));

    /**
     * @api {get} /business-card/:id Request card information.
     * @apiParam {Number} id bussiness card unique ID
     * @apiName GetBusinessCard
     * @apiGroup BusinessCard
     * 
     * @apiSuccess {String} arrumarrrrrrrrrrrr
     * 
     * @apiError (400) error Error loading business-card.
     *
     */
    app.get('/business-card/:id', card.show);

     /**
     * @api {put} /business-card/:id Update card information.
     * @apiParam {Number} id bussiness card unique ID.
     * @apiParam {String[]} tags array tags unique ID.
     * @apiName PutBusinessCard
     * @apiGroup BusinessCard
     * 
     * @apiSuccess (200) msg sucessfully updated business card.
     * 
     * @apiError (400) error Error updated business card.
     *
     */
    app.put('/business-card/:id', card.update);
    /**
     * @api {delete} /business-card/:id Request card information.
     * @apiParam {Number} id bussiness card unique ID.
     * @apiName DeleteBusinessCard
     * @apiGroup BusinessCard
     * 
     * @apiSuccess (200) msg sucessfully deleted business card.
     * 
     * @apiError (400) msg Error deleting business card.
     *
     */
    app.delete('/business-card/:id', card.remove);

}