var Product = require('../models/product');
module.exports.create = function ( req, res ){
  var product = new Product( req.body );
  product.save(function (err, result){
    res.json(result);
  });
}


module.exports.query = function ( req, res ){
    Product.find( {},function( req, result){
      res.json( result );
    } );
}
