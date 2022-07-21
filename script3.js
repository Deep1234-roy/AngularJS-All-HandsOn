/// <reference path="angular.min.js" />

var myModule = angular
                .module("myAppModule",[])
                .controller("myController3",function($scope){
                    var student = [
                        {Name : "Deep Roy",Age: 23,Gender: "Male"},
                        {Name : "Abhishek Kolkur",Age: 21,Gender: "Male"},
                        {Name : "Rushikesh Samata",Age: 19,Gender: "Male"},
                        {Name : "Dishani Patil",Age: 17,Gender: "Female"},
                        {Name : "Radhika Singh",Age: 20,Gender: "Female"},
                    ]
                    $scope.student=student;
                })