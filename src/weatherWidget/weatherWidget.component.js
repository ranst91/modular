module.exports = {
    templateUrl: 'views/widget.component.html',
    bindings: {
    },
    controllerAs: 'vm',
    controller: ['dataservice', 'toastr', controller]
};


function controller(dataservice, toastr) {
    var vm = this;
    vm.cardsList = [];
    vm.zipCode = '';
    vm.addCard = function () {
        if (vm.cardsList.length >= 10){
            toastr.error("Maximum cards capacity reached", "You have exceeded the 10 cards limitation, please remove one and try again");
            return;
        }
        vm.getData(vm.zipCode).then(item => {
            vm.cardsList.push(item[0]);
        });
    };

    vm.removeCard = function ($index) {
        vm.cardsList.splice($index, 1);
    };

    vm.getData = function (zipCode) {
        return dataservice.getForecastByZipcode(zipCode);
    };
}