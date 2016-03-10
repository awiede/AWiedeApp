'use strict';

/**
 * @ngdoc overview
 * @name awiedeWebApp
 * @description
 * # awiedeWebApp
 *
 * Main module of the application.
 */
angular
  .module('awiedeWebApp', [
    'ui.router',
    'ui.bootstrap',
    'pdf'
  ])
  .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url : '/',
        templateUrl: 'main/main.view.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about/about.view.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'contact/contact.view.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .state('resume', {
        url: '/resume',
        templateUrl: 'resume/resume.view.html',
        controller: 'ResumeCtrl',
        controllerAs: 'resume'
      });

    $urlRouterProvider.otherwise('/');
  }]);
