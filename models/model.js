const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pewdiepie', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on('open', () => {
    console.log('The connection to the Database has been established');
})

db.on('error', (err) => { console.error(err) })

//Our Schema
var cartSchema = new mongoose.Schema({
    title: String,
    id: Number,
    price: Number,
    img: String
})

var model = mongoose.model('model', cartSchema);

module.exports = model