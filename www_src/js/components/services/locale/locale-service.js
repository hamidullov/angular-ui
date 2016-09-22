(function() {
'use strict';

    angular
        .module('myApp.locale', ['pascalprecht.translate'])
        .service('Locale', Locale);

    function Locale($translate) {
        this.setCurrentLanguage = (lang) =>{
            $translate.use(lang);
        }

        this.getCurrentLanguage = () => $translate.use();
    }
})();