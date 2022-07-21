/// <reference path="angular.min.js" />

var app = angular
            .module("myModule",[])
            .controller("myController",function($scope){
                var employees = [
                    {name:"Deep Roy",dateOfBirth:new Date("November 13,1999"),gender:"Male",salary:38700.988},
                    {name:"Abhishek Kolkur",dateOfBirth:new Date("March 21,1999"),gender:"Male",salary:40000.00},
                    {name:"Bipasha Banik",dateOfBirth:new Date("June 30,1998"),gender:"Female",salary:67998},
                    {name:"Mafaz Sharma",dateOfBirth:new Date("December 25,1996"),gender:"Male",salary:69899.786},
                    {name:"Hardik Gupta",dateOfBirth:new Date("July 26,1997"),gender:"Male",salary:33000},
                ]
                $scope.employees=employees;
                $scope.sortColumn = "name";
            })