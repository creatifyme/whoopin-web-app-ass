// ****************************************************
// 
// 	Angular Services
// 
// ****************************************************

'use strict';

// ****************************************************
// 
// 	Get JSON Data Service
// 
// ****************************************************
beerApp
	.service('getData', function($rootScope, $http, $q) {

		this.getJson = function (deferred, file) {
			$http
				.get('json/'+file + '.json')
				.success(function (data, status) {
					deferred.resolve(data);
				});
		};
	});