var app = angular.module("weatherApp");

app.directive("aDirective", function() {
	return {
		restrict: "E",
		templateUrl: "directives/aDirective.html",
		scope: {
			// @ = &
			message: "@",
			variable: "=",
			funk: "&"
		},
		link: function(scope, elem, attrs){
			elem.click(function(){
				scope.getStuff();
			})
		},
		controller: function($scope, $http){
			//$scope the same as scope 
			$scope.getStuff = function(){
				$http.get("http://api.openweathermap.org/data/2.5/weather?lat=42.2&lon=-87")
				.then(function(data){
					console.log(data.data)
				})
			}
		},
		transclude: true

	}
})