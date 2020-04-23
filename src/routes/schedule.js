
module.exports = app => {

    const schedule = app.controllers.ScheduleController;

    app.get('/schedule/:userId', schedule.index);
    app.put('/schedule/:userId', schedule.update);
    app.get('/schedule/export/:userId', schedule.exportTocsv);
}