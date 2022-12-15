;(function () {
  'use strict';

  angular
    .module('app')
    .controller('UsersCtrl', UsersCtrl);

  function UsersCtrl(UsersService) {
    const vm = this;

    const init = function() {
      UsersService.getUsers().then(resp => {
        vm.users = resp.data.data;
      });
    };

    init();
  }

})();