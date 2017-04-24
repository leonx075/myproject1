var PersonApp = angular.module('PersonApp', ['ngRoute', 'personControllers']);

PersonApp.config([
  '$routeProvider',
  function($routeProvider){
      $routeProvider.
        when('/person/:PersonId', {
          templateUrl : '/person2/partials/person-detail.html',
          controller : 'personController'
      });
  }
]);

PersonApp.config([
  '$httpProvider', function($httpProvider){
      $httpProvider.defaults.xsrfCookieName = "csrftoken";
      $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";

}
]);
