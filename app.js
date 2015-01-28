var app = angular.module("weatherApp", ["ngRoute"]);

app.config(function ($routeProvider) {
	$routeProvider	
		.when("/", {
			templateUrl: "home/home.html",
			controller: "homeCtrl"

		})
		.when("/weather/:name", {
			templateUrl: "weather/weather.html",
			controller: "weatherCtrl",
			resolve: {
				weather: function(weatherService){
					return weatherService.getWeather();
				}
			}
		})
		.otherwise("/");
})