var personControllers =  angular.module('personControllers', []);


personControllers.controller('PersonDetailController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('/person/api/person/' + $routeParams.PersonId + '/?format=json').success(function(data) {
          $scope.Person = data;
        });
    }
])
