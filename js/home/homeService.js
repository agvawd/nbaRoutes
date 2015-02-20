var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){		
	
	this.getAllTeamData = function(){
		var jazzData = $http.get('https://api.parse.com/1/classes/utahjazz');
		var lakersData = $http.get('https://api.parse.com/1/classes/losangeloslakers');
		var heatData = $http.get('https://api.parse.com/1/classes/miamiheat');

		return $q.all([jazzData, lakersData, heatData]).then(function(data){
			var dataOfTeams = [];
			for(var i = 0; i < data.length; i++){
				dataOfTeams.push(data[i].data.results);
			}
		
			for(var i = 0; i < dataOfTeams.length; i++) {
				var wins = 0;
				var losses = 0;
				var singleTeamData = dataOfTeams[i];
				for(var j = 0; j < singleTeamData.length; j++) {
					if(singleTeamData[j].won === true){
						wins++;
					}
					else if (singleTeamData[j].won === false){
						losses++;
					}
				}
				dataOfTeams[i].wins = wins;
				dataOfTeams[i].losses = losses;
			}
			return dataOfTeams;
		});
	}
});