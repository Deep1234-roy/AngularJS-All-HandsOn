/// <reference path="angular.min.js" />

var newApp = angular
                .module("MyModule",[])
                .controller("MyController",function($scope){
                    var employee = [
                        {name:"Deep Roy",gender:1,city:"Kolkata"},
                        {name:"Rohit das",gender:1,city:"Pune"},
                        {name:"Bipasha Singh",gender:2,city:"Airoli"},
                        {name:"Shradhda Patil",gender:2,city:"Delhi"},
                        {name:"Titin Paul",gender:3,city:"Tirupati"}
                    ]
                    $scope.employee=employee;
                })