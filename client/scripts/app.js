( function () {
  'use strict';
  angular.module("MeanDemo", [ 'ngResource' ])

    .controller("MeanController", MeanController);

  MeanController.$inject = [ '$scope', '$resource' ];
  function MeanController( $scope, $resource ){
    var Product = $resource('/api/product')

    Product.query(function( results){
      $scope.products = results;
    });

    $scope.createProduct = function () {
      var product = new Product();
      product.name = $scope.prodName;
      product.$save( function ( result ){
        $scope.products.push( result );
      });
      // $scope.products.push( { id: $scope.products.length, name: $scope.prodName } );
    }
  }
})();
