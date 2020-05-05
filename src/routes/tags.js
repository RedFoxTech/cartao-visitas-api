module.exports = app => {
    const TagsControllers = app.controllers.TagsController;
    const passport = app.middlewares.auth;

    app.all('/tags', passport.authenticate('jwt', { session: false }));
    app.all('/tags/:id', passport.authenticate('jwt', { session: false }));

    /**
     * @api {get} /tags Request logged user tags
     * @apiName GetTags
     * @apiGroup Tag
     *
     * @apiSuccess {String} _id Tag ID.
     * @apiSuccess {String} name Tag name.
     * @apiSuccess {String} userId User ID logged in.
     * @apiSuccess {String} __v version key.
     * 
     * @apiError (400) error Error loading logged user tags.
     *
     */
    app.get('/tags', TagsControllers.index);

    /**
     * @api {post} /tags Register logged-in user tags
     * @apiParam {String} name tags name
     * @apiName PostTag
     * @apiGroup Tag
     *
     * @apiSuccess (200) msg successfully created tag.
     * 
     * @apiError (400) error Error creating tag.
     *
     */
    app.post('/tags', TagsControllers.create);
    /**
     * @api {put} /tags/:id Update logged-in user tags
     * @apiParam {Number} id Tags unique ID.
     * @apiParam {String} name Tags name.
     * @apiName PutTag
     * @apiGroup Tag
     *
     * @apiSuccess (200) msg successfully updated tag.
     * 
     * @apiError (400) error Error updating tag.
     *
     */
    app.put('/tags/:id', TagsControllers.update);
    /**
     * @api {delete} /tags/:id Delete logged user tag.
     * @apiParam {Number} id Tags unique ID.
     * @apiName DeleteTag
     * @apiGroup Tag
     *
     * @apiSuccess (200) msg sucessfully deleted tag.
     * 
     * @apiError (400) error Error deleting tag.
     *
     */
    app.delete('/tags/:id', TagsControllers.remove);

}