(function () {
    'use strict';

    const Config = {
        // @if NODE_ENV='production'
			API_URL: "https://api.prod-server.com/v1/",
        // @endif
        
        // @if NODE_ENV='development'
			API_URL: "https://api.test-server.com/v1/"
        // @endif

    };
    angular.module('myApp.config', [])
    .constant('Config', Config)
    .constant('YEAR_TIMESTAMP', 1000 * 60 * 60 * 24 * 365)
    .config(function () {
        const curr = '/* @echo VERSION */';
        Config.Version = curr;
    });
    
})();