app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : 'partials/mainpage.html'
		
	})
	.when('/signIn',{
		templateUrl : 'partials/registration.html',
		controller : 'regController'
		
	})
	.when('/about',{
		templateUrl : 'partials/about.html'
		
	})
	.when('/privacy',{
		templateUrl : 'partials/privacy.html'
		
	})
	.when('/login',{
		templateUrl : 'partials/login.html',
		controller  : 'loginController'
	})
	.when('/forgot',{
		templateUrl : 'partials/forgotpwd.html',
		controller:'forgotController'
		
	})
	.when('/success',{
		templateUrl : 'partials/success.html',
		controller : 'successController'
		
	})
	.when('/table',{
		templateUrl : 'partials/table.html',
		controller : 'tableController'
		
	})



}]);