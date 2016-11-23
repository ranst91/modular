var widgetComponent = require('./weatherWidget.component');
var WeatherCard = require('./weatherCard.component.js');
var draggable = require('./draggable.directive.js');
var dataservice = require('./dataservice');
require('angular-toastr');
require('./vendors/sortable.min.js');
var app = angular.module('app.weather', ['ui.sortable', 'toastr'])
    .directive('draggable', draggable)
    .factory('dataservice', ['$http', dataservice])
    .component('weatherWidget', widgetComponent)
    .component('weatherCard', WeatherCard);
module.exports = app;