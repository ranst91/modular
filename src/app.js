$ = jQuery = require('jquery');
require('./weatherWidget/vendors/jquery-ui.min.js');
var angular = require('angular');
require('./weatherWidget/weather.module');
angular.module('myApp', ['app.weather']);
/* @ngInject */
