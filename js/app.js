var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  //router here
  $routeProvider
  .when("/",{
  	templateUrl: "/js/home/homeTmpl.html",
  	controller: "homeCtrl",
  	resolve: {
        allTeam: function(homeService){
  			   return homeService.getAllTeamData(); 
        }
  		}
  	})
  .when("/teams/:team",{
  	templateUrl: "/js/teams/teamTmpl.html",
  	controller: "teamCtrl",
  	resolve: {
  		teamData: function($route, teamService){
  			return teamService.getTeamData($route.current.params.team);
  		}	
  	}
  })
  .otherwise({
  	redirectTo: "/"
  })
});