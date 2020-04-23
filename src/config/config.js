require('dotenv/config');

module.exports = {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_DATABASE: process.env.MONGODB_DATABASE,
    jwtSecret: "MyS3cr3tK3Y",
    jwtSession: {
        session: false
    }
}