var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, allTeam){
	$scope.jazzLogoPath = "images/jazz-logo.png";
	$scope.jazzData = allTeam[0];
	$scope.jazz = "Utah Jazz";
	
	$scope.lakersLogoPath = "images/lakers-logo.png"
	$scope.lakersData = allTeam[1];
	$scope.lakers = "Los Angeles Lakers";
	
	$scope.heatLogoPath = "images/heat-logo.png"
	$scope.heatData = allTeam[2];
	$scope.heat = "Miami Heat";

	$scope.formatDate = function(dateStr) {
		return new Date(dateStr).toLocaleDateString();
	}	
});