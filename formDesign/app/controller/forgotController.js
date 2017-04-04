app.controller('forgotController',['$scope'
	,function($scope){
		console.log("ssssssss");
		var changename= $scope.Cname;
		var changepwd= $scope.n_pwd;
		/*if(changepwd==$scope.c_pwd)
		{
			
		}
		else
		{
			$scope.pwdError = true;
            $scope.pError = "The passwords are not same"
             $scope.n_pwd = "";
            $scope.c_pwd = "";

		}*/
		$scope.pwde=function()
		{
			if(changepwd!=$scope.c_pwd)
			{
			$scope.pwdError = true;
            $scope.pError = "The passwords are not same"
            $scope.n_pwd = "";
            $scope.c_pwd = "";
			}

		}

		}]);