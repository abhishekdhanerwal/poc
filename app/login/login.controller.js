
(function () {
    'use strict';
  
    angular
      .module('myApp.login')
      .controller('LoginCtrl', LoginCtrl);
  
      LoginCtrl.$inject = ['$state'];
    /* @ngInject */
    function LoginCtrl($state) {
      var vm = this;

      activate();

      function activate() {
        vm.disableButton = true;
      }

      vm.checkButton = function(){

        if(vm.userName == undefined || vm.password == undefined)
            vm.disableButton = true;
        else if(vm.userName == 0 || vm.password == undefined)
            vm.disableButton = true;
        else if(vm.userName == 0 || vm.password == 0)
            vm.disableButton = true;
        else if(vm.userName == undefined || vm.password == 0)
            vm.disableButton = true;
        else
            vm.disableButton = false;

            console.log(vm.disableButton)
            console.log(vm.userName)
            console.log(vm.password)

      }

      vm.login = function(){
          $state.go('myApp.dashboard');
      }
    }
  })();
  
  