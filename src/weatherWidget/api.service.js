"use strict";
module.exports = function ($http) {
    var ApiService = {
        getWeatherForecast: getWeatherForecast,
        filterForecastData: filterForecastData,
        getForecastByZipcode: getForecastByZipcode
    };

    return ApiService;
    //////////////////

    function getWeatherForecast(zipCode) {
        return $http({});
    }

    function filterForecastData(forecast) {
        //do some logic
    }

    function getForecastByZipcode(zipCode) {
        return getWeatherForecast(zipCode).then(res => {
            filterForecastData(res).then(forecastData => {
                return forecastData;
            })
        });
    }
};