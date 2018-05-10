
angular.module('myApp').run(['$rootScope', '$state', '$stateParams',
function ($rootScope, $state, $stateParams) {

        $state.transitionTo('myApp.login');

    }
]);

angular.module('myApp').config(['$httpProvider', '$stateProvider', '$urlRouterProvider' ,'$translateProvider',
function ($httpProvider, $stateProvider, $urlRouterProvider , $translateProvider) {

    // prefix and suffix information  is required to specify a pattern
    // You can simply use the static-files loader with this pattern:
    $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/',
        suffix: '.json'
    });

    // $translateProvider.translations('english', {
    //     'TITLE': 'Hello',
    //     'FOO': 'This is a paragraph'
    //   });
     
    //   $translateProvider.translations('arabic', {
    //     'TITLE': 'Hallo',
    //     'FOO': 'Dies ist ein Absatz'
    //   });
     
      $translateProvider.preferredLanguage('english');

    // APPLICATION ROUTES
    // -----------------------------------
    // For any unmatched url, redirect to /app/dashboard
    $urlRouterProvider.otherwise("/app/login");
    //
    // Set up the state
    $stateProvider.state('myApp', {
        url: "/app",
        templateUrl: "common/shell.html",
        controller: 'ShellCtrl',
        controllerAs: 'vm',
        abstract: true
    }).state('myApp.login', {
        url: "/login",
        templateUrl: "login/login.html",
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      }).state('myApp.dashboard', {
        url: "/dashboard",
        templateUrl: "dashboard/dashboard.html",
        controller: 'DashboardCtrl',
        controllerAs: 'vm'
      })
}
]);