angular.module('app1').directive('product', function(){
    return {
      restrict: 'AE',
      templateUrl: './views/product-tmpl.html',
      scope: {
        vidgame: '=',
        getdeets: '&'

      }
    };
});
