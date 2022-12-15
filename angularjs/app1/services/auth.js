;(function () {
  'use strict';

  angular
    .module('Services')
    .service('AuthService', AuthService);

  function AuthService($http) { 
    const vm = this;

    vm.login = function(email, password) {
      const url = 'https://reqres.in/api/login';
      return $http.post(url, { email, password});
    }

  }
})();