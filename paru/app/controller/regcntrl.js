app.controller('regController',['$scope','$location','mainFactory','detailFactory',
	function($scope,$location,mainFactory,detailFactory){
		var obj=[];
		//ng-show=false;
		$scope.countries="";
  $scope.countries =  [{
		"country": "india",
		"states": [{
			"state": "tamilnadu",
			"cities": [{
				"city": "coimbatore"
			}, {
				"city": "madurai"
			}, {
				"city": "selam"
			}]
		}, {
			"state": "kerala",
			"cities": [{
				"city": "coimbatore"
			}, {
				"city": "madurai"
			}, {
				"city": "selam"
			}]
		}, {
			"state": "karnataka",
			"cities": [{
				"city": "coimbatore"
			}, {
				"city": "madurai"
			}, {
				"city": "selam"
			}]
		}]
	}, {
		"country": "Australia",
		"states": [{
			"state": "queensland",
			"cities": [{
				"city": "coimbatoress"
			}, {
				"city": "madurassi"
			}, {
				"city": "selassm"
			}]
		}, {
			"state": "victoria",
			"cities": [{
				"city": "coimbatovvre"
			}, {
				"city": "maduvvrai"
			}, {
				"city": "selvvam"
			}]
		}, {
			"state": "adelede",
			"cities": [{
				"city": "coimbwwwatore"
			}, {
				"city": "maduwwwrai"
			}, {
				"city": "selwwam"
			}]
		}]
	}]
	
	var obj1=[];
	$scope.obj1=obj1;
	
  $scope.changes = function(e){
    //console.log(e.country);
     $scope.states = e.states;
    $scope.obj1.Country=e.country;
 }

	$scope.statechanges =function(e){
		//console.log(e.state);
		$scope.cities = e.cities;
		$scope.obj1.State=e.state;
	}

	$scope.citychanges = function(e){ 
		//console.log(e.city);
		$scope.obj1.City=e.city;
	}

	$scope.details = localStorage.getItem("names") ? JSON.parse(localStorage.getItem("names")) :[];

	$scope.sign_in=function(){
		$scope.obj=obj;
		$scope.obj.firstName=$scope.fname;
		$scope.obj.lastName=$scope.lname;
		$scope.obj.userName=$scope.uname;
		$scope.obj.password=$scope.pwd;
		$scope.obj.confirm=$scope.cpwd;
		$scope.obj.gender=$scope.gender;
mainFactory.setInfo($scope.obj);
detailFactory.setInfo($scope.obj1);
$location.path('/success');

/*localStorage.setItem("names", JSON.stringify($scope.personalDetails));
	console.log(names);*/
	
	
	//console.log($scope.details);
	var item='names';
            $scope.lists = {
                    fname:$scope.fname,
                    lname:$scope.lname,
                    uname:$scope.uname,
                    password:$scope.pwd,
                    gender:$scope.gender,
                    country:$scope.obj1.Country,
                    state:$scope.obj1.State,
                    city:$scope.obj1.City,
                    
        };
        		
                $scope.details.push($scope.lists);
                localStorage.setItem(item, JSON.stringify($scope.details));

	}
	}]);