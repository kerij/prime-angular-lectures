var myApp = angular.module('myApp', []);

myApp.controller('IndexController', ['$scope', function($scope) {
  console.log("hey, i'm working!");

  $scope.firstname = 'Kris';
  $scope.lastname = 'Szafranski';

}]);
