'use strict';

/**
 * @ngdoc function
 * @name toolboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toolboxApp
 */
angular.module('toolboxApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
