var app = angular.module('app', ['ngRoute']);

	app.controller("bmi", ["$scope", function ($scope) {
        $scope.title = "BMI Calculator";
        $scope.weight;
        $scope.height;
        $scope.bmi ;
        $scope.showBMR = false;
        $scope.sex = "male";
        $scope.age ;
		$scope.bmr;
		$scope.showActivity = false;
		$scope.activityLevels = [
									{ description: "Sedentary - Little or no Exercise/ desk job", factor: 1.2},
									{ description: "Lightly active - Light exercise/ sports 1 – 3 days/ week", factor: 1.375},
									{ description: "Moderately active - Moderate Exercise, sports 3 – 5 days/ week", factor: 1.55},
									{ description: "Very activeHeavy Exercise/ sports 6 – 7 days/ week", factor: 1.725},
									{ description: "Extremely active Very heavy exercise/ physical job/ training 2 x/ day", factor: 1.9}
								];
		$scope.activityLevel ;
		$scope.tdee;
		
        $scope.calculate = function(weight, height){

        	weight = parseFloat(weight);
        	height = parseFloat(height);
        	
        	weight = weight * 0.453;
        	height = (height * 2.54)/100;
        	
        	$scope.bmi = (weight /(height * height)).toFixed(2);
        	$scope.showBMR = true;
        }
        $scope.bmrCalc = function(age, sex, weight, height){
        	age = parseInt(age);
        	weight = parseFloat(weight);
        	height = parseFloat(height);
        	weight = weight * 0.453;
        	height = height * 2.54;

        	if(sex==="male"){
        		$scope.bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        	
        	} else{
        		$scope.bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        	}
        	$scope.bmr = Math.round($scope.bmr);
        	$scope.showActivity = true;
        }
    	$scope.tdeeCalc = function(bmr, activityLevel){
     			bmr = parseFloat(bmr);
				activityLevel = parseFloat(activityLevel);
				$scope.tdee = bmr * activityLevel;
				$scope.tdee = Math.round($scope.tdee);
        }
    }])
  