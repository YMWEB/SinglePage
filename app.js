var app = angular.module('testP5',['ngRoute']);

app.run(function($rootScope,$templateCache){
	$rootScope.$on('$routeChangeStart',function(event,next,current){
		if (typeof(current) !== 'undefined'){
			$templateCache.remove(current.templateUrl);
		}
	})
})
//configure our routes
app.config(function($routeProvider){
	$routeProvider

	.when('/home',{
		templateUrl:'pages/home.html',
		controller:'mainController'
	})

	.when('/order',{
		templateUrl:'pages/order.html',
		controller:'orderController'
	})

	.when('/detail',{
		templateUrl:'pages/detail.html',
		controller:'detailController'
	})

	.when('/pay',{
		templateUrl:'pages/pay.html',
		controller:'payController'
	})
	.when('/afterpay',{
		templateUrl:'pages/afterpay.html',
		controller:'afterpayController'
	})
	.when('/activate',{
		templateUrl:'pages/activate.html',
		controller:'activateController'
	})

	.otherwise('/home')
})

var mainCtrl = function($scope,$http){
	$scope.products =[
					{	
						"name": "云计价",
						"price":"1800",
						"suitVersionId":"2015050700601"
						
					},
					{	
						"name": "云计价+数据包",
						"price":"2400",
						"suitVersionId":"2015050700601"
						
					},
					{	
						"name": "云计价+数据包+广财信息服务",
						"price":"3980",
						"suitVersionId":"2015050700601"
						
					}

					];

   $scope.current_option = $scope.products[0];
   $scope.isShow = false;

   $scope.searchLocker = function(){
   		var httpAddress= "http://me.glodon.com:8080/market2/p5"+"?usbKeys="+$scope.usbKeys;
   		$http({
   			method:'POST',
   			url:httpAddress

   		}).success(function(response){
   			$scope.locker_data = response.usbKeysList;
   			$scope.locker_empty = response.usbKeysWarn;
   		}
   	)
   }
   

   
   
   // $scope.current_option_change()=function(){
   // 		for(i=0;i<$scope.products.length;i++){
   // 			if($scope.current_option ==$scope.products[i].name)

   // 		}
   		
   // }

	$scope.message = "eveyone come and see"
}

var orderCtrl = function($scope){
	$scope.message = "look, I am an About page"
}

var detailCtrl = function($scope){
	$scope.message ='contact us'
}

app.controller('mainController',mainCtrl);
app.controller('orderController',orderCtrl);
app.controller('detailController',detailCtrl);
// app.controller('payController',payCtrl);
// app.controller('payafterController',payafterCtrl);
// app.controller('activateController',activateCtrl);