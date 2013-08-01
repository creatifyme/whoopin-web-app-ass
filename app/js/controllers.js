// ****************************************************
// 
// 	Angular Controllers
// 
// ****************************************************

'use strict';

beerApp
	// ****************************************************
	// 
	// 	Auto sets active class to tabs
	// 
	// ****************************************************
	.controller('navCtrl', function ($scope, $location) {
		// Auto sets active class to tabs
		$scope.navClass = function (page) {
			var currentRoute = $location.path().substring(1) || 'about';
			return currentRoute.indexOf(page) !== -1 ? 'active' : '';
		};
	})

	// ****************************************************
	// 
	// 	Beers Page Controller
	// 
	// ****************************************************
	.controller('beersCtrl', function ($scope, getData, $q) {
		// Invoke defer function
		var deferred = $q.defer();

		deferred.promise.then(function (data) {
			// Assigning beer data to the scope
			$scope.beers = data.beers;
		});

		// Grab data for the beer
		getData.getJson(deferred, 'beers');
	})


	// ****************************************************
	// 
	// 	Breweries Page Controller
	// 
	// ****************************************************
	.controller('breweriesCtrl', function ($scope, getData, $q) {
		// Invoke defer function
		var deferred = $q.defer();

		deferred.promise.then(function (data) {
			// Assigning beer data to the scope
			$scope.breweries = data.breweries;
		});

		// Grab data for the beer
		getData.getJson(deferred, 'breweries');
	})

	// ****************************************************
	// 
	// 	About Page Controller
	// 
	// ****************************************************
	.controller('aboutCtrl', function ($scope) {

		$scope.imageSrc = 'img/beer.jpg';
		$scope.imageAlt = 'Some beer alt';
	});