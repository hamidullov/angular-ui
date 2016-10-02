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

            .state('master.home', {
                url: "/",
                views: {
					mainContent: {
						templateUrl: "js/home/home.html",
                        controller: "HomeController"
					}
				}
            })
            .state('master.payments', {
                url: "/payments",
                 views: {
					mainContent: {
						templateUrl: "js/payments/payments.html",
                        controller: "PaymentsController"
					}
				}
            })
            .state('master.about', {
                url: "/about",
                views: {
					mainContent: {
						templateUrl: "js/about/about.html",
                        controller: "AboutController"
					}
				}
            })
			 .state('master.controls', {
                url: "/controls",
                views: {
					mainContent: {
						templateUrl: "js/controls/controls.html",
                        controller: "ControlsController"
					}
				}
            })
			 .state('inner.other', {
                url: "/other",
                views: {
					mainContent: {
						templateUrl: "js/other/other.html",
                        controller: "OtherController"
					}
				}
            });

        $urlRouterProvider.otherwise('/');
    };

    angular.module('myApp').config(['$stateProvider', '$urlRouterProvider', Router]);
})();