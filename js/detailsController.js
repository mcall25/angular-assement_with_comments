// 3. $stateParams allows the app to pass a paramater through the app. in my minde stateParams just remembers what each specific id within each object, this id
// is passed the directive of the shop.html page
angular.module('app1').controller('detailsController', function($scope, service, $stateParams){

  service.getDetails($stateParams.id)
    .then(function(res){
      $scope.details = res
      console.log($scope.details);
        $scope.details;
    })


})
