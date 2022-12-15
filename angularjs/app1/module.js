; (function () {
  'use strict';

  var app = angular.module('app', ['ui.router', 'Components', 'Services']);
  angular.module('Components', []);
  angular.module('Services', []);

  app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'login/login.controller.html',
      controller: 'LoginCtrl',
      controllerAs: 'vm',
    });

    $stateProvider.state('users', {
      url: '/users',
      templateUrl: 'users/users.controller.html',
      controller: 'UsersCtrl',
      controllerAs: 'vm',
    });
  }])

})();
