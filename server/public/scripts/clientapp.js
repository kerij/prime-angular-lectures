var myApp = angular.module('myApp', []);

myApp.controller('IndexController', ['$scope', '$http', function($scope, $http) {
  console.log("IndexController loading");

  // $scope.firstname = 'Keri';
  // $scope.addPerson = function () {
  //   $scope.text = "A new person";
  // }
  //
  // $scope.foods = [
  //   { name: 'chips'},
  //   { name: 'doritos'}
  // ];
  //
  // // ---- AJAX Requests with Angular's $http -----------
  //
  // $http({
  //   method: 'GET',
  //   url: '/things'
  // }).then(function (response) {
  //   console.log('response object ', response);
  //   $scope.snacks = response.data;
  // });
  //
  // $http({
  //   method: 'POST',
  //   url: '/things',
  //   data: {thing: 'food'}
  // })
  // .then(function(response) {
  //     console.log('response object', response);
  //     $scope.snacks = response.data;
  // });
  $scope.getOrders = function(id) {
    console.log(id);
    $http({
      method: 'GET',
      url: '/customers/' + id
    }).then(function (response) {
      // console.log('response object ', response);
      // var dateUpdate = response.data;
      // console.log(dateUpdate);
      // for (var i = 0; i < dateUpdate.length; i++) {
      //   var swagDate = new Date(Date.parse(dateUpdate[i].order_date));
      //   console.log(swagDate);
      //   dateUpdate[i].order_date = swagDate;
      //   console.log(dateUpdate[i]);
      // }

      $scope.orders = response.data;
    });
  }


  $http({
    method: 'GET',
    url: '/customers'
  }).then(function (response) {
    console.log('response object ', response);
    $scope.customers = response.data;
  });

}]);
