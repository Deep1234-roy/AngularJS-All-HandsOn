/// <reference path="angular.min.js" />

var myApp = angular
                .module("myModule",[])
                .controller("MyController",function($scope){
                    var employee={
                        firstname: "Deep",
                        lastname: "roy",
                        gender: "male"
                    };
                    //$scope.message = "Welcome to Angular JS Tutorial"
                    $scope.employee = employee;
                });

// myApp.controller("MyController",function($scope){

//     var employee={
//         firstname: "Deep",
//         lastname: "roy",
//         gender: "male"
//     };
//     //$scope.message = "Welcome to Angular JS Tutorial"
//     $scope.employee = employee;
// });
