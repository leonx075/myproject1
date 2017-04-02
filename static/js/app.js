var PersonApp = angular.module('PersonApp', ['ngRoute', 'PersonControllers']):

PersonApp.config(['$routeProvider',
  function($routeProvider){
      $routeProvider.
      when('/person/:peronId', {
        templateUrl : '/templates/person2/partials/person-detail.html'
        controller : 'personController'
      });
  }
])

PersonApp.config([
  '$httpProvider', function($httpProvider){
      $httpProvier.defaults.xsrfCookieName = "crsftoken";
      $httpProvier.defaults.xsrfHeaderName = "X-CSRFToken";

}
])
