// ****************************************************
// 
// 	Angular Directives
// 
// ****************************************************

'use strict';


beerApp
	.directive('searchBox', function ($compile) {
		return {
				restrict: 'A',
				link: function (scope, element, attr) {
					var template = '<input type="text" ng-model="search" placeholder="Search"><br><br><button ng-click="changeColor()">Change Colors</button>';

					element.html(template);
					$compile(element.contents())(scope);

					scope.changeColor = function () {
						angular.element(document.getElementsByTagName('li')).toggleClass('alternate');
					};
				}
		};
	});