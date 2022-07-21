/// <reference path="angular.min.js" />

var app = angular
            .module("myModule",[])
            .controller("myController",function($scope){
                var employee = [
                    {name:"Deep Roy",age:23,salary:78900,city:"Kolkata"},
                    {name:"Abhishek Kolkur",age:26,salary:69800,city:"Gulbarga"},
                    {name:"Chandrani Paul",age:30,salary:50090,city:"Pune"},
                    {name:"Bob Biswas",age:45,salary:76588,city:"Gurgaon"},
                    {name:"Diptendu Basu",age:36,salary:57600,city:"Airoli"}
                ]
                $scope.employee=employee;
            })