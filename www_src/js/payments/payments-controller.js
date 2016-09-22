(function() {
'use strict';


    var PaymentsController = function($q, $scope, Config) {
        var vm = this;
        $scope.version =  Config;
      
        activate();

        ////////////////

        function activate() { 
            
        }
    }

    angular.module('myApp')
     .controller('PaymentsController', PaymentsController);
    
})();