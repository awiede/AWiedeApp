'use strict';

/**
 * @ngdoc function
 * @name awiedeWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the awiedeWebApp
 */
angular.module('awiedeWebApp')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isCollapsed = true;

    $scope.toggleCollapse = function() {
      $scope.isCollapsed = !$scope.isCollapsed;
    }

    $scope.init = function() {
      $scope.links = [
        {
          url: "#/about",
          text: "About",
          imageUrl: "./app/images/aboutUs.png",
          glyClass: "glyphicon glyphicon-user"
        },
        {
          url: "#/contact",
          text: "Contact",
          imageUrl: "./app/images/contactUs.png",
          glyClass: "glyphicon glyphicon-send"
        },
        {
          url: "#/docs",
          text: "Docs",
          glyClass: "glyphicon glyphicon-book"
        },
        {
          url: "#/resume",
          text: "Resume",
          glyClass: "glyphicon glyphicon-file"
        }
      ];
    };
    $scope.init();

    $scope.isActive = function (viewLocation) {
      var isActive = $location.path().indexOf(
          viewLocation.substr(1)) > -1;
      return isActive;

    };
  }]);
