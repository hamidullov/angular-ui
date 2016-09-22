(function() {
    'use strict';

    angular.module('myApp')
    .controller('AppController', ['$scope', '$translate', function($scope, $translate){
        $scope.changeLang = () =>{
            //TODO: все это нужно выносить в сервисы. Это только для примера
            var toLang =  $scope.currentLang() == 'en'?'ru':'en';
            $translate.use(toLang);
        }
        $scope.currentLang = () => {
            var cl = $translate.use();
            console.log('cl: ', cl);
             return cl;
        }
    }]);

   
})();