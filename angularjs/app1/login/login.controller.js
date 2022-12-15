;(function () {
  'use strict';

  angular
    .module('app')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl(AuthService, $state) {
    const vm = this;

    vm.login = function(isFormValid) {
      if (!isFormValid) return;
      AuthService.login(vm.email, vm.password).then(resp => {
        $state.go('users');
      });
    }
  }

})();