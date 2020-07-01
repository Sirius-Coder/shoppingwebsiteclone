const express = require('express');
var app = express();
var model = require('./models/model')
var bodyParser = require('body-parser');
const path = require("path")
var morgan = require('morgan')
require("dotenv").config()
var port = process.env.PORT || 5000;
var productData;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "build")))


//Controller for Displaying the product info specifically
app.get('/product', (req, res) => {
    res.send(productData);
})
app.post('/product', (req, res) => {
        productData = req.body;
    })
    //controller for adding to cart
app.get('/cart', (req, res) => {
    var item = []
    model.find({}, (err, users) => {

        res.send(users)

    })
})
app.post('/cart', (req, res) => {
    console.log(req.body)
    var cartData = new model({
        title: req.body.item.title,
        id: req.body.item.id,
        price: req.body.item.price,
        img: req.body.item.img
    });
    cartData.save(e => { if (e) console.error('Oops an error occured in saving to the DB') })
})
app.post('/cartdel', (req, res) => {
    model.findOneAndDelete({ title: req.body.title }, (err, users) => {
        if (err)
            throw err;

        console.log('User Deleted Succesfully')
    })
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log('Connected to the Backend Environment');

})