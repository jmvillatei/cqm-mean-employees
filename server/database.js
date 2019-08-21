const mongoose = require('mongoose');

const URI = 'mongodb+srv://jmvillatei:1234@crud-mongo-v77na.mongodb.net/meanbd?retryWrites=true&w=majority';

mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(function (db) { // <- db as first argument
        console.log('Base conectada')
    })
    .catch(function (err) {
        console.log('Error, BD no conectada');
    });

module.exports = mongoose;