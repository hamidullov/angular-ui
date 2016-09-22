(function() {
    'use strict';

    var Translate = function($translateProvider){
		$translateProvider.translations('en', {
			PAYMENTS: 'Payments',
			MENU: 'Menu',
			ABOUT: 'About',
			HEADER: 'Header',
			FOOTER: 'Footer',
			HI: 'Hi',
			BACK: 'To back',
			VERSION: 'Version',
			CONFIG: 'Configuration file'
        });

        $translateProvider.translations('ru', {
			PAYMENTS: 'Платежи',
			MENU: 'Меню',
			ABOUT: 'О нас',
			HEADER: 'Шапка',
			FOOTER: 'Подвал',
			HI: 'Привет',
			BACK: 'Назад',
			VERSION: 'Версия',
			CONFIG: 'Файл конфигурации'
        });

        $translateProvider.useSanitizeValueStrategy('escaped');
		$translateProvider.preferredLanguage("en");
        $translateProvider.fallbackLanguage("en");
    };

    angular.module('myApp.translate', ["pascalprecht.translate"])
		.config(Translate);;
})();