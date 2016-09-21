(function () {
    'use strict';

    const Config = {};
    angular.module('myApp.config', [])
    .constant('Config', Config)
    .constant('YEAR_TIMESTAMP', 1000 * 60 * 60 * 24 * 365)
    .config(function () {
        const curr = '/* @echo VERSION */';
        Config.Version = curr;
    });
    
})();