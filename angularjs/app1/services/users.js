;(function () {
  'use strict';

  angular
    .module('Services')
    .service('UsersService', UsersService);

  function UsersService($http) { 
    const vm = this;

    vm.getUsers = function() {
      const url = 'https://reqres.in/api/users?page=1&per_page=12';
      return $http.get(url);
    }

  }
})();