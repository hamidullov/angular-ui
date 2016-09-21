(function() {
    'use strict';

	const Router = function($stateProvider, $urlRouterProvider) {
        $stateProvider
        	/**
			 * Inner master template
			 */
			.state('inner', {
				url: "",
				abstract: true,
				templateUrl: "templates/inner-master.html",
				controller: 'AppController'
			})

			/**
			 * Master template
			 */
			.state('master', {
				url: "",
				abstract: true,
				templateUrl: "templates/master.html",
				controller: 'AppController'
			})

            .state('master.menu', {
                url: "/menu",
                views: {
					mainContent: {
						templateUrl: "js/menu/menu.html",
                        controller: "MenuController"
					}
				}
            })
            .state('inner.payments', {
                url: "/payments",
                 views: {
					mainContent: {
						templateUrl: "js/payments/payments.html",
                        controller: "PaymentsController"
					}
				}
            })
            .state('inner.about', {
                url: "/about",
                views: {
					mainContent: {
						templateUrl: "js/about/about.html",
                        controller: "AboutController"
					}
				}
            });

        $urlRouterProvider.otherwise('/menu');
    };

    angular.module('myApp').config(['$stateProvider', '$urlRouterProvider', Router]);
})();