;(function () {
  'use strict';

  angular
    .module('app')
    .controller('UsersCtrl', UsersCtrl);

  function UsersCtrl($stateParams, UsersService) {
    const vm = this;

    const init = function() {
      vm.email = $stateParams.email;
      UsersService.getUsers().then(resp => {
        vm.users = resp.data.data;
      });
    };

    init();
  }

})();