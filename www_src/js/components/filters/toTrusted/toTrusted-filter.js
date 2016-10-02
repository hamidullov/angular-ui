(function(){
	'use strict';

	var ToTrusted = function($sce){
        return function(text) {
            return typeof text === 'string' ? $sce.trustAsHtml(text) : text;
        };
    };

	angular.module('myApp.toTrusted', []).filter('toTrusted', ['$sce', ToTrusted]);
})();