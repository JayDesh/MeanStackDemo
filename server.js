var express = require('express'),
    app = express(),
    bodyParser = require( 'body-parser'),
    mongoose = require('mongoose'),
    productController = require('./server/controllers/product-controller');

mongoose.connect('mongodb://localhost:27017/products');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get( '/', function ( req, res ) {
  res.sendFile( __dirname + '/client/views/index.html');
} );

//Rest API's
app.get('/api/product', productController.query);
app.post( '/api/product', productController.create );
app.use('/scripts', express.static( __dirname + '/client/scripts'));

app.listen( 3000, function () {
  console.log('I\'m listening');
});
