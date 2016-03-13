var app = angular.module('myapp', []);

app.controller('mycon1', function($scope) {


	$scope.records = [

	{
		name: "Aparupa",
		belt: "sexy",
		rate: 2000
	},

	{
		name: "Saif",
		belt: "shit",
		rate: 1000
	},

	{
		name: "Chotku",
		belt: "cool",
		rate: 5000
	}

	];

});
