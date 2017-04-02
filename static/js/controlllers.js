var PersonControllers =  angular.module('personControllers', []);

personControllers.personControllers('personDetailController', ['$scope', '$routeParams', '$http',
    function($scope, $routerParams, $http){
        $http.get('/person/api/person/' + $routeParams.personId + '/?format=json').success(function(data)){
          $scope.person = data;
        });
    }
])
