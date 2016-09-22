(function() {
    'use strict';
    angular.module('myApp')
    .controller('AppController',function($scope, Locale){
        $scope.changeLang = () =>{
            let toLang =  $scope.currentLang() == 'en'?'ru':'en';
            Locale.setCurrentLanguage(toLang);
        }
        $scope.currentLang = () => {
            let cl = Locale.getCurrentLanguage();
            console.log('cl: ', cl);
            return cl;
        }
    });

   
})();