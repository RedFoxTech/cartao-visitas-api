require('dotenv/config');

module.exports = app => {
    return {
        PORT: process.env.PORT,
        MONGODB_URI: process.env.MONGODB_URI,
        MONGODB_DATABASE: process.env.MONGODB_DATABASE,
        JWT_SECRET: process.env.JWT_SECRET,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_SECRET: process.env.GOOGLE_SECRET
    }
}