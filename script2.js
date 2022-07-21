/// <reference path="angular.min.js" />

var myApp2 = angular
                .module("myModule2",[])
                .controller("myController2",function($scope){
                    // $scope.msg = "Hello!! Good Afternoon"
                    var employee = {
                        FirstName: "Deep",
                        LastName: "Roy",
                        Gender: "Male"
                    }
                    $scope.employee=employee;
                });