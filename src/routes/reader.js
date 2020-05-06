module.exports = app => {
    const cardReader = app.controllers.CardReaderController;
    const upload = app.middlewares.uploads;

    app.post('/reader', upload.single('image'), cardReader.read);
}