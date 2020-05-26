module.exports = app => {
    const cardReader = app.controllers.CardReaderController;
    const upload = app.middlewares.uploads;
    const passport = app.middlewares.auth;
    
    app.all('/reader', [
        passport.authenticate('jwt', { session: false }),
        upload.single('image')
    ]);

    app.post('/reader', cardReader.read);
}