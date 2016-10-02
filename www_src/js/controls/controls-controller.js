(function () {
    'use strict';


    var ControlsController = function ($q, $scope) {
        init();

        ////////////////

          $scope.itemArray = [
                { id: 1, name: 'first' },
                { id: 2, name: 'second' },
                { id: 3, name: 'third' },
                { id: 4, name: 'fourth' },
                { id: 5, name: 'fifth' },
            ];

            $scope.myValue = { selected: $scope.itemArray[0] };

        function init() {

          

        }
    }

    angular.module('myApp')
        .controller('ControlsController', ControlsController);

})();