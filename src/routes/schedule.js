
module.exports = app => {

    const schedule = app.controllers.ScheduleController;
    const auth = app.config.auth;

    app.get('/schedule', auth.authJwt, schedule.index);
    app.put('/schedule', auth.authJwt, schedule.update);
    app.get('/schedule/export/:userId', schedule.exportTocsv);
}