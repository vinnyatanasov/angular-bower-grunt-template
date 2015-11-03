(function(){
    
    var app = angular.module("main", ["ngRoute"]);
    
    // routes
    app.config(function($routeProvider){
        $routeProvider
        .when("/home", {
            templateUrl:"templates/base.html",
            controller:"homeCtrl"
        })
        .when("/second", {
            templateUrl:"templates/base.html",
            controller:"secondCtrl"
        })
        .when("/third", {
            templateUrl:"templates/base.html",
            controller:"thirdCtrl"
        })
        .otherwise({
            redirectTo:"/home"
        });
    });
    
    // controllers
    app.controller("homeCtrl", ["$scope", function($scope){
        $scope.pageTitle = "Home";
        $scope.pageContent = "Hello there, welcome home.";
    }]);
    
    app.controller("secondCtrl", ["$scope", function($scope){
        $scope.pageTitle = "Second";
        $scope.pageContent = "This is the second page.";
    }]);
    
    app.controller("thirdCtrl", ["$scope", function($scope){
        $scope.pageTitle = "Third";
        $scope.pageContent = "This is the third page!";
    }]);
    
})();