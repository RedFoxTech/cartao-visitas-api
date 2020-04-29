
module.exports = app => {

    const schedule = app.controllers.ScheduleController;
    const passport = app.middlewares.auth;

    app.all('/schedule', passport.authenticate('jwt', { session: false }));
    app.all('/schedule/:userId', passport.authenticate('jwt', { session: false }));
    app.all('/schedule/export/:userId', passport.authenticate('jwt', { session: false }));

    app.get('/schedule', schedule.index);
    app.put('/schedule/:userId', schedule.update);
    app.get('/schedule/export', schedule.exportTocsv);
}