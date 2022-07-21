/// <reference path="angular.min.js" />

var app = angular
            .module("MyModule",[])
            .controller("MyController5",function($scope){
                var technologies = [
                    {name:"Java",likes:0,dislikes:0},
                    {name:"C#",likes:0,dislikes:0},
                    {name:"Python",likes:0,dislikes:0},
                    {name:"ASP.net",likes:0,dislikes:0},
                    {name:"Angular",likes:0,dislikes:0},
                ]
                $scope.technologies=technologies;

                $scope.incrementLikes = function(technology){
                    technology.likes++;
                }
                $scope.incrementDislikes = function(technology){
                    technology.dislikes++;
                }

                $scope.defaultButton = function(technology){
                    technology.likes = 0;
                    technology.dislikes=0;
                }

            })