
(function () {
    'use strict';
  
    angular
      .module('myApp.dashboard')
      .controller('DashboardCtrl', DashboardCtrl);
  
      DashboardCtrl.$inject = [ 'NgTableParams', '$state', '$filter', '$stateParams' ];
    /* @ngInject */
    function DashboardCtrl(NgTableParams, $state,  $filter, $stateParams) {
      var vm = this;

      activate();

      function activate() {
        vm.tableParams = new NgTableParams(
          {
            page: 1, // show first page
            count: 100, // count per page
            sorting: {
              lastModified: 'desc'   // initial sorting
            }, // count per page
            filter: {
              name: '',
              // status: ''// initial filter
            }
          }, {
            // total: data.length,
          });
      }

    }
  })();
  
  