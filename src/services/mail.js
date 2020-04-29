const nodemailer = require('nodemailer');

module.exports = app => {
    const { MAILHOG_HOST, MAILHOG_PORT } = app.config.config;

    const transport = nodemailer.createTransport({
        host: MAILHOG_HOST,
        port: MAILHOG_PORT,
        auth: null
    });


    return transport;
}