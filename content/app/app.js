var app = angular.module('myapp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'content/home.html'
        })
        .when('/list', {
            templateUrl: 'content/directory.html',
            controller: 'mycon1'
        })
        .otherwise({
            redirectTo: '/home'
        });

}]);

app.controller('mycon1', function($scope) {

    $scope.recordRemove = function(record) {

        var removedRecord = $scope.records.indexOf(record);
        $scope.records.splice(removedRecord, 1);
    };

    $scope.addRecord = function() {

        $scope.records.push({

            name: $scope.newrecord.name,
            belt: $scope.newrecord.belt,
            color: $scope.newrecord.color,
            rate: $scope.newrecord.rate

        });

        $scope.newrecord.name = "";
        $scope.newrecord.belt = "";
        $scope.newrecord.color = "";
        $scope.newrecord.rate = "";
    };

    $scope.records = [

        {
            name: "Aparupa",
            belt: "sexy",
            color: "red",
            rate: 2000
        },

        {
            name: "Saif",
            belt: "shit",
            color: "blue",
            rate: 1000
        },

        {
            name: "Chotku",
            belt: "cool",
            color: "green",
            rate: 5000
        }

    ];

});
