/// <reference path="angular.min.js" />

var myApp = angular
                .module("MyModule",[])
                .controller("myController4",function($scope){
                    var countries = [
                        {
                        Name: "UK",
                        cities:[
                            {Name:"London"},
                            {Name:"Washington DC"}
                        ]
                    },
                    {
                        Name: "India",
                        cities:[
                            {Name:"New Delhi"},
                            {Name:"Mumbai"},
                            {Name: "Kolkata"}
                        ]
                    },
                    {
                        Name: "Bangladesh",
                        cities:[
                            {Name:"Dhaka"},
                            {Name:"Shajanpur"},
                            {Name: "Korachi"}
                        ]
                    }
                    ]
                    $scope.countries=countries;
                })