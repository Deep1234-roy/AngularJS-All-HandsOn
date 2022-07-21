/// <reference path="angular.min.js" />

var app = angular
            .module("MyModule",[])
            .controller("MyController",function($scope){
                var employees = [
                    {name:"Deep Roy",age:23,gender:"Male"},
                    {name:"Abhishek Kolkur",age:28,gender:"Male"},
                    {name:"Srinath Basu",age:33,gender:"Male"},
                    {name:"Dipali Kumari",age:39,gender:"Female"}
                ]
                $scope.employees=employees;

                $scope.EmployeeView = "EmployeeTable.html";
                
            })