var app = angular.module('myapp', ['ngRoute','ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'content/home.html',
            controller: 'mycon1'
        })
        .when('/contact-success', {
            templateUrl: 'content/contact-success.html'
        })
        .when('/contact', {
            templateUrl: 'content/contact.html',
            controller: 'contactCtrl'
        })
        .when('/list', {
            templateUrl: 'content/directory.html',
            controller: 'mycon1'
        })
        .otherwise({
            redirectTo: '/home'
        });

}]);

app.directive('recordName', [function(){
	
	return {
		restrict: 'E',
		scope: {
			title: '=',
			singlename:  '='
		},

		templateUrl: 'content/view-record.html',
		transclude:true,
		replace:true,
		controller: function($scope){
		 	$scope.randomNumber = Math.floor(Math.random() * 3);
		} 
	
	};
}]);

app.controller('mycon1', function($scope, $http) {

	$scope.toggle = true;

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

    $scope.removeAll = function(){
    	$scope.records = [];
    };


    $http.get('content/data/records.json').success(function(data){

    	$scope.records = data;

    });

    $scope.showAll = function(){
    	location.reload();
    	
    };

});

app.controller('contactCtrl', function($scope, $location){
	
	$scope.sendMessage = function(){
		$location.path('/contact-success');
	};
});