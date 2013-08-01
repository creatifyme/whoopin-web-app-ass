// ****************************************************
// 
// 	Angular App Configuration
// 
// ****************************************************

'use strict';

// ****************************************************
// 
// 	Setting up Angular Routes
// 
// ****************************************************
beerApp
	.config(function ($routeProvider) {
		$routeProvider
			.when('/breweries', {
				templateUrl: 'partials/breweries.html',
				controller: 'breweriesCtrl'
			})
			.when('/beers', {
				templateUrl: 'partials/beers.html',
				controller: 'beersCtrl'
			})
			.otherwise({
				redirectTo: '/about',
				templateUrl: 'partials/about.html',
				controller: 'aboutCtrl'
			});
	});