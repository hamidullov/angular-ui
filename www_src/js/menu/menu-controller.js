(function() {
'use strict';


    var MenuController = function($q, $scope, Config) {
        var vm = this;
        $scope.config =  Config;
        activate();

        ////////////////

        function activate() { 
            
        }
    }

    angular.module('myApp')
 
     .controller('MenuController', MenuController);
    
})();