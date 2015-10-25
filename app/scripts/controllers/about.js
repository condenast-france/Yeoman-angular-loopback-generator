'use strict';

/**
 * @ngdoc function
 * @name toolboxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the toolboxApp
 */
angular.module('toolboxApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
