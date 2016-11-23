$ = jQuery = require('jquery');
require('./vendors/jquery-ui.min.js');
// var Weather = require('./weather');
var widgetComponent = require('./weatherMain.component');
var WeatherCard = require('./WeatherCard.component.js');
var draggable = require('./draggable.directive.js');
var ApiService = require('./api.service');
require('./vendors/sortable.min.js');
var app = angular.module('app.weather', ['ui.sortable'])
    .component('weatherWidget', widgetComponent)
    .component('weathercard', WeatherCard)
    .directive('draggable', draggable)
    .factory('ApiService', ['$http', ApiService]);
module.exports = app;