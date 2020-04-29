module.exports = app => {
    const UserController = app.controllers.UserController;
    const passport = app.middlewares.auth;

    app.all('/user', passport.authenticate('jwt', { session: false }));

    /**
     * @api {get} /users Request logged user information
     * @apiName GetUser
     * @apiGroup User
     *
     * @apiSuccess {String} color Color card.
     * @apiSuccess {String} _id User ID.
     * @apiSuccess {String} googleId Google user ID.
     * @apiSuccess {String} name Username.
     * @apiSuccess {String} email user email.
     * @apiSuccess {String} createdAt User creation date.
     * @apiSuccess {String} __v version key.
     * @apiSuccess {String} businessCard ID user card.
     * @apiSuccess {String} schedule ID user schedule.
     * 
     * @apiError (400) error Error loading logged user.
     *
     */
    app.get('/user', UserController.show);

    /**
     * @api {put} /users Update logged user information
     * @apiName PutUser
     * @apiGroup User
     *
     * @apiSuccess {String} color Color card.
     * @apiSuccess {String} _id User ID.
     * @apiSuccess {String} googleId Google user ID.
     * @apiSuccess {String} name Username.
     * @apiSuccess {String} email user email.
     * @apiSuccess {String} createdAt User creation date.
     * @apiSuccess {String} __v version key.
     * @apiSuccess {String} businessCard ID user card.
     * @apiSuccess {String} schedule ID user schedule.
     * 
     * @apiError (400) error Error updating user.
     *
     */
    app.put('/user', UserController.update);

    /**
     * @api {delete} /users Delete logged user
     * @apiName DeleteUser
     * @apiGroup User
     *
     * @apiSuccess (200) UserDeletedSucess The logged in user was deleted
     * 
     * @apiError (400) error Error deleting user.
     *
     */
    app.delete('/user', UserController.delete);
}