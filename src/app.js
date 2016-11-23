var angular = require('angular');
require('./weatherWidget/weather.module');
angular.module('myApp', ['app.weather']);
/* @ngInject */
