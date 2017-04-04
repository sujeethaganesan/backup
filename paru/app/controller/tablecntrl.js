app.controller('tableController',['$scope','$location'
	,function($scope,$location){

		$scope.datas = JSON.parse(localStorage.getItem("names"));
		
	}]);
