var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/dogs', {
      templateUrl: '/views/templates/dogs.html',
      controller: 'DogController',
      controllerAs: 'dc'
    })
    .when('/cats', {
      templateUrl: '/views/templates/cats.html',
      controller: 'catController',
      controllerAs: 'cc'
    })
    .when('/birds', {
      templateUrl: '/views/templates/birds.html',
      controller: 'birdsController',
      controllerAs: 'bc'
    })
    .otherwise({
      redirectTo: 'dogs'
    });
}]);
