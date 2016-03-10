/**
 * Created by andreas.s.wiede on 10-Mar-16.
 */
angular.module('awiedeWebApp')
  .controller('ContactCtrl', ['$scope', function($scope) {
    $scope.testDisplay = false;

    $scope.changeDisplay = function() {
      $scope.testDisplay = true;
    };

    $scope.addUser = function() {
      $scope.people.push({id: 1, name: "Bob Johnson", email: "bob@test.com", phoneNumber: "(555) 555-5556"});
    }

    $scope.people = [
      {id: 0, name: "Andreas Wiede", email: "awiede@awiede.net", phoneNumber: "(555) 555-5555"}
    ];

    $scope.user = {};

    $scope.submit = function () {
      console.log("User clicked submit with", $scope.user.first_name);
    };



    $scope.inAddContact = false;

    $scope.addContactFlag = function () {
      $scope.inAddContact = true;
    };

    $scope.add = function () {
      $scope.person = {
        id: $scope.people.length,
        name: $scope.name,
        email: $scope.email,
        phoneNumber: $scope.phone
      };
      $scope.people.push($scope.person);
      $scope.name = "";
      $scope.email = "";
      $scope.phone = "";
      $scope.inAddContact = false;
    };

    $scope.cancel = function () {
      $scope.name = "";
      $scope.email = "";
      $scope.phone = "";
      $scope.inAddContact = false;
    };

    $scope.remove = function () {
      console.log($scope.person); //undefined
      console.log($scope.people);
      $scope.people.slice($scope.people.indexOf($scope.person));
    };
  }]);
