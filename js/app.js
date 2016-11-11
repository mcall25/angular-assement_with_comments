//1. the app will set the routs and the structure of the app. it will define each page, a templetate to tell the code what to put in the ui-view, and a url. ui.router is what
//allows angular to  move the user around to the different page and inject the templates in the ui-view

angular.module('app1', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'homeController'
      })
      .state('about', {
        url: '/about',
        templateUrl: './views/about.html',
        controller: 'aboutController'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: './views/blog.html',
        controller: 'blogController'
      })
      .state('shop', {
        url: '/shop',
        templateUrl: './views/shop.html',
        controller: 'shopController'
      })
      .state('details', {
        url: '/detail/:id',
        templateUrl: './views/product-details.html',
        controller: 'detailsController'
      })

    });
