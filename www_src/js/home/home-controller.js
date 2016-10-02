(function() {
'use strict';


    var HomeController = function($q, $scope, Config) {
        var vm = this;
        $scope.config =  Config;
        activate();

        ////////////////

        function activate() { 
            
        }
    }

    angular.module('myApp')
 
     .controller('HomeController', HomeController);
    
})();