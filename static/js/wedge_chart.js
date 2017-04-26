var test = angular.module('test', ['googlechart']);

test.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('//');
  $interpolateProvider.endSymbol('//');
});

test.controller('MainCtrl', function($scope, $http) {

  $http.get("/persons/persons/3/").then(function (response) {
    $scope.todos = response.data;

//  $scope.todos = $http.get("/persons/persons/3/", {cache: false});
//  $scope.bados = $http.get("/persons/persons/4/", {cache: false});

//  $q.all([$scope.todos, $scope.bados]).then(function(response){


    var y = 'something';
    $scope.y = "WORLD!"
    var chart1 = {};
    chart1.type = "AreaChart";

    chart1.data = [
       ['Component', 'target', 'baseline', 'wedge_1', 'wedge_2'],
       [2005, 54000, , , ,],
       [2006, 54000, , , ,],
       [2007, 54000, , , ,],
       [2008, 54000, , , ,],
       [2009, 56000, , , ,],
       [2010, 50290, , , ,],
       [2011, 55870, , , ,],
       [2012, 53290, , , ,],
       [2013, 51870, , , ,],
       [2014, 60290, , , ,],
       [2015, 59870, , , ,],
       [2016, 58290, 58290, 0, 0,],
       [2020, 61000, 61000-5000, -500, -500,],
       [2030, 62290, 40000, -3000, -3000,],
       [2040, 65087, 35087, -4000, -3500,]
      ];

    chart1.data.push([2050, 65587, 30000, -5000, -6000]);

    chart1.options = {
        displayExactValues: true,
        title: $scope.todos.last_name,
        width: 1200,
        height: 600,
        legend: {position: "bottom"},
        isStacked: true,
        chartArea: {backgroundColor: "lightblue"},
        vAxis: {title:"CO2 emissions", minValue: 0, gridlines: {count: 6, color:"lightblue"}},
        hAxis: {ticks: [2005,2010,2015,2020,2025,2030,2035,2040,2045,2050]},
        series: {
          1: {
            areaOpacity: 1,
            color: "black",
            lineWidth: 3,
            type: "line" ,
          },
          0: {
            areaOpacity: 1,
            color: "#d9d9d9",
            lineWidth: 3.5
          },
          2: {
            areaOpacity: 1,
            color: "yellow",
            lineWidth: 1.5
          },
          3: {
            areaOpacity: 1,
            color: "green",
            lineWidth: 1.5
          }
        }
      };

    chart1.formatters = {
      number : [{
        columnNum: 0,
        pattern: "####"
      }]
    };

    $scope.chart = chart1;

    $scope.aa=1*$scope.chart.data[14][3];
    $scope.bb=1*$scope.chart.data[15][3];
    $scope.cc=1*$scope.chart.data[16][3];


  });

});
