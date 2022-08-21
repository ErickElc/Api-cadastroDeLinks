const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => {
    })
    .catch(err => console.log(err));

const db = mongoose.connection;


module.exports = db;