app.controller('loginController',['$scope','$location','mainFactory'
	,function($scope,$location,mainFactory){
	
				$scope.login=function(){
					
var username = $scope.Uname;
                var passwd = $scope.Pwd;
                var details=[];
                details=JSON.parse(localStorage.getItem("names"));

               
                angular.forEach(details, function(value,key) {

                if(value.uname==username)
                {
                
                	if(value.password==passwd)
                	{
                		$location.path('/table');	

                	}
                }

                     else {
                       
                        $scope.userNameError = true;
                        $scope.userError = "The user name or password you entered isn't correct. Try entering it again."
                         $scope.Uname = "";
                        $scope.Pwd = "";

                    }
                
           

});
    




}


	}]);
