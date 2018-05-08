'use strict';

/**
 * Config for the router
 */
app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider',
function ($httpProvider, $stateProvider, $urlRouterProvider) {

    // APPLICATION ROUTES
    // -----------------------------------
    // For any unmatched url, redirect to /app/dashboard
    $urlRouterProvider.otherwise("/app/login");
    //
    // Set up the state
    $stateProvider.state('app', {
        url: "/app",
        templateUrl: "common/shell.html",
        abstract: true
    }).state('app.login', {
        url: "/login",
        templateUrl: "login/login.html"
      })
}
]);

  