;(function () {
  'use strict';

  angular
    .module('app')
    .component('appHeader', appHeader());

  function appHeader() {
    var component = {
      templateUrl: 'components/app_header/app_header.component.html',
      controller: AppHeaderCtrl,
      controllerAs: 'vm'
    };

    return component;
  }

  function AppHeaderCtrl () {
    var vm = this;

    vm.$onInit = function () {
    };
  }

})();