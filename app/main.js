
angular.module('myApp').run(['$rootScope', '$state', '$stateParams',
function ($rootScope, $state, $stateParams) {

        $state.transitionTo('myApp.login');

    }
]);

angular.module('myApp').config(['$httpProvider', '$stateProvider', '$urlRouterProvider',
function ($httpProvider, $stateProvider, $urlRouterProvider) {

    // APPLICATION ROUTES
    // -----------------------------------
    // For any unmatched url, redirect to /app/dashboard
    $urlRouterProvider.otherwise("/app/login");
    //
    // Set up the state
    $stateProvider.state('myApp', {
        url: "/app",
        templateUrl: "common/shell.html",
        abstract: true
    }).state('myApp.login', {
        url: "/login",
        templateUrl: "login/login.html"
      })
}
]);