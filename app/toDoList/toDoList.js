(function() {
  'use strict';

  /**
   * Our app
   */

  angular.module('toDoList', [
    'ngRoute'
  ]);

  /**
   * Our app config
   */

  angular
    .module('toDoList')
    .config(config);

  function config($routeProvider) {
    $routeProvider.when('/toDoList', {
    templateUrl: 'toDoList/toDoList.html',
    controller: 'toDoListController',
    controllerAs: 'vm'
  });
  }

  /**
   * Our app controller
   */
  
  angular
    .module('toDoList')
    .controller('toDoListController', toDoListController);

  function toDoListController() {
    var vm = this;

    vm.toDoList = [];

    vm.addToDo = function() {

    }

    vm.removeToDo = function() {

    }

    vm.countToDoRemaining = function() {
      //return
    }
  }

})();