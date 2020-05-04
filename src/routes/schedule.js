module.exports = app => {

    const schedule = app.controllers.ScheduleController;
    const passport = app.middlewares.auth;

    app.all('/schedule', passport.authenticate('jwt', { session: false }));
    app.all('/schedule/:userId', passport.authenticate('jwt', { session: false }));
    app.all('/schedule/export/:userId', passport.authenticate('jwt', { session: false }));

    /**
     * @api {get} /schedule Request logged user schedule.
     * @apiName GetSchedule
     * @apiGroup Schedule
     * 
     * @apiSuccess {Object} cards logged user cards.
     * @apiSuccess {String} _id ID schedule.
     * @apiSuccess {String} userId logged user id.
     * @apiSuccess {String} _v version key.
     * 
     * @apiError (400) error Error loading schedule.
     *
     */
    app.get('/schedule', schedule.index);
    
    app.put('/schedule', schedule.update);
    /**
     * @api {get} /schedule/export export schedule for email.
     * @apiName GetScheduleExport
     * @apiGroup Schedule
     * 
     * @apiSuccess (200) msg email sent
     * 
     * @apiError (400) error Error exporting schedule.
     *
     */
    app.get('/schedule/export', schedule.exportTocsv);
}