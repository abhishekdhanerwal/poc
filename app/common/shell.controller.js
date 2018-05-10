
(function () {
    'use strict';
  
    angular
      .module('myApp')
      .controller('ShellCtrl', ShellCtrl);
  
      ShellCtrl.$inject = ['$translate'];
    /* @ngInject */
    function ShellCtrl($translate) {
      var vm = this;

      activate();

      function activate() {
        vm.names = [{'name': 'english', 'url': 'https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/gb.png'},{'name': 'arabic', 'url': 'https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/it.png'}];

          vm.languageSelected = vm.names[0];
      }

      vm.changeLanguage = function(){
        $translate.use(vm.languageSelected.name)
      }

     
    }
  })();
  
  