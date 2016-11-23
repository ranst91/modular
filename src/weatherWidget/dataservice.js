"use strict";
module.exports = function ($http) {
    var service = {
        getWeatherForecast: getWeatherForecast,
        filterForecastData: filterForecastData,
        getForecastByZipcode: getForecastByZipcode
    };

    return service;
    //////////////////

    function getWeatherForecast(zipCode) {
        return $http({
            method: 'GET',
            url: 'http://localhost:1337/views/api.json'
        }).then(res => {return res});
    }

    function filterForecastData(forecast) {
        //do some logic
        let newForecast = forecast.data;
        return newForecast;
    }

    function getForecastByZipcode(zipCode) {
        zipCode = 0;
        return getWeatherForecast(zipCode)
            .then(res => {
                let forecast = filterForecastData(res);
                return forecast;
            }).catch(err => console.log(err));
    }
};