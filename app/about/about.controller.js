'use strict';

/**
 * @ngdoc function
 * @name awiedeWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the awiedeWebApp
 */
angular.module('awiedeWebApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
