app.controller('forgotController',['$scope'
	,function($scope){
		
		
		
		$scope.change=function(){
			
		if($scope.n_pwd==$scope.c_pwd)
		{
			console.log("a");
			var data=JSON.parse(localStorage.getItem("names"));

			angular.forEach(data, function(value,key) {
          
                if($scope.Cname==value.uname)
                {
                  value.password=$scope.n_pwd;
                  localStorage.setItem("names",JSON.stringify(data));	
                }
});

		}
	}


		}]);

