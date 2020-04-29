const nodemailer = require('nodemailer');

module.exports = app => {
    const { MAILHOG_HOST, MAILHOG_PORT } = app.config.config;

    const transport = nodemailer.createTransport({
        host: process.env.MAILHOG_HOST,
        port: process.env.MAILHOG_PORT,
        auth: null
    });


    return transport;
}