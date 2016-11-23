module.exports = function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.draggable({
                revert:true,
                connectToSortable: "#sortable",
                })
        }
    }
};