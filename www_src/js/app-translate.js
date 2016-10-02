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
			CONFIG: 'Configuration file',
			CONTROLS: 'Controls',
			OTHER_MASTER: 'To other master page',
			
			//other.html
			OTHER_CONTENT_TEXT : 'Other content text' ,
			
			//home.html
			HOME_TITLE: 'Bootstrap starter template',
			HOME_DESCRIPTION: 'Use this document as a way to quickly start any new project. <br/> All you get is this text and a mostly barebones HTML document.' 
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
			CONFIG: 'Файл конфигурации',
			CONTROLS: 'Контролы',
			OTHER_MASTER: 'Другой шаблон',
			//other.html
			OTHER_CONTENT_TEXT : 'Текст для другого шаблона',

			//home.html
			HOME_TITLE: 'Bootstrap стартовый шаблон', 
			HOME_DESCRIPTION: 'Используйте этот документ как способ быстро начать любой новый проект. <br/> Все, что вы получили этот текст и в основном HTML документ.', 
        });

        $translateProvider.useSanitizeValueStrategy('escaped');
		$translateProvider.preferredLanguage("en");
        $translateProvider.fallbackLanguage("en");
    };

    angular.module('myApp.translate', ["pascalprecht.translate"])
		.config(Translate);;
})();