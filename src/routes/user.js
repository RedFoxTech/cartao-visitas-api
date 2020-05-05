module.exports = app => {
    const UserController = app.controllers.UserController;
    const passport = app.middlewares.auth;
    const upload = app.middlewares.uploads;

    app.all('/user', [
        passport.authenticate('jwt', { session: false }), 
        upload.fields([
            {name: 'image', maxCount: 1},
            {name: 'logo', maxCount: 1}
        ])
    ]);

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
<<<<<<< HEAD
     * @apiSuccess {String} image perfil image.
     * @apiSuccess {String} logo card logo.
     * @apiSuccess {String} office user office.
     * @apiSuccess {String} phone user phone number.
     * 
=======
     * @apiSuccess {String} businessCard ID user card.
     * @apiSuccess {String} schedule ID user schedule.
>>>>>>> c3c3adcbcb9c53565a8025d2e1918fa9e040ce45
     * 
     * @apiError (400) error Error loading logged user.
     *
     */
    app.get('/user', UserController.show);

    /**
     * @api {put} /users Update logged user information
<<<<<<< HEAD
     * @apiParam {String} color Color card.
     * @apiParam {String} image perfil image.
     * @apiParam {String} logo card logo.
     * @apiParam {String} office user office.
     * @apiParam {String} phone user phone number.
     * @apiName PutUser
     * @apiGroup User
     *
     * @apiSuccess (200) msg sucessfully updated user.
=======
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
>>>>>>> c3c3adcbcb9c53565a8025d2e1918fa9e040ce45
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