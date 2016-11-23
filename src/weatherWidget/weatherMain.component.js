module.exports = {
    templateUrl: 'views/widget.component.html',
    bindings: {
        test: '@'
    },
    controllerAs: 'vm',
    controller: function (DataService) {
        var vm = this;
        vm.cardsList = [];
        vm.zipCode = '';
        console.log(vm.test);
        vm.addCard = function () {
            vm.getData(vm.zipCode).then(item => {
                vm.cardsList.push(item);
            });
        };

        vm.removeCard = function ($index) {
            vm.cardsList.splice($index, 1);
        };

        vm.getData = function (zipCode) {
            return DataService.getWeatherForecast(zipCode);
        };
    },
};