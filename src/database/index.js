const mongoose = require('mongoose');

const { MONGODB_URI, MONGODB_DATABASE } = require('../config/config');

module.exports = () => {
    mongoose.connect(
        `${MONGODB_URI}/${MONGODB_DATABASE}`,
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true
        }
    ).then(() => {
        console.log('mongo conectado!');
    }).catch(() => {
        console.log('mongo não conectado')
    });
    return mongoose;
}