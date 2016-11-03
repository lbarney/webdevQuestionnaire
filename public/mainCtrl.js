angular.module("devQues").controller("mainCtrl", function($scope, $firebaseArray){

	var list = new Firebase("https://web-dev-question.firebaseio.com/records");

	
	$scope.ref = $firebaseArray(list);
	
	
	$scope.addUser = function(user){
		console.log(user);
		$scope.ref.$add(user)
		console.log("this function executed");
		$scope.user = ""
	};
});