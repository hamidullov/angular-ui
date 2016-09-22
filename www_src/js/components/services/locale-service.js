(function() {
'use strict';

    angular
        .module('myApp.locale')
        .service('Locale', Locale);

    Locale.$inject = ['$translator'];
    function Locale($transl) {
        this.setCurrentLanguage = (lang) =>{

        }
        this.exposedFn = exposedFn;
        
        ////////////////

        function exposedFn() { }
        }
})();