angular.module('app1').controller('shopController', function($scope, service){

  service.getProducts()
    .then(function(res){
       $scope.products = res;
       return $scope.products;
    });

});
