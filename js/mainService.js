// 2/ the service will call the data from the api and pass it along to the controller.
// notice that the getDeatails api call passes in id, so that ui.router cal pass that information throught the app and land on the view it should be passed to 
angular.module('app1').service('service', function($http){

  var baseUrl = 'http://practiceapi.devmounta.in/products';
  var baseUrl2 = "http://practiceapi.devmounta.in/products/"

  this.getProducts = function() {
    return $http( {
        method: "GET",
        url: baseUrl
        }).then(function(response){
          return response.data;
    });
  }
  this.getDetails = function(id) {
    return $http( {
        method: "GET",
        url: baseUrl2 + id
        }).then(function(response){
          return response.data;
    });
  }
})
