'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'ui.bootstrap',
  'pascalprecht.translate',
  'myApp.login',
  'myApp.dashboard'
])
// .
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');

//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
