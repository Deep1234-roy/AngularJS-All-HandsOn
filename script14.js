/// <reference path="angular.min.js" />

var app = angular
            .module("MyModule",[])
            .controller("MyController",function($scope){
                var countries = [
                    {
                        name:"India",
                        cities:[
                            { name:"Hyderabad"},
                            {name:"Chennai"},
                            {name:"Kolkata"}
                        ]
                    },
                    {
                        name:"USA",
                        cities:[
                            { name:"Los Angeles"},
                            {name:"Chicago"},
                            {name:"Washington D.C"}
                        ] 
                    }
                ]
                $scope.countries=countries;
            })