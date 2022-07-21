/// <reference path="angular.min.js" />

var myApp = angular
                .module("myModule1",[])
                .controller("MyController1",function($scope){
                    var country={
                        name: "India",
                        capital: "New Delhi",
                        flag: "india.webp"
                    };
                    //$scope.message = "Welcome to Angular JS Tutorial"
                    $scope.country = country;
                });