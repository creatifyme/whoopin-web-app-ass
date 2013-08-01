// ****************************************************
// 
// 	Angular Filters
// 
// ****************************************************

'use strict';


angular
	.module('filters', [])
		// ****************************************************
		// 
		// 	Truncate Filter
		// 
		//  Usage
		//  var myText = "This is an example.";
		//  	{{myText|truncate}}
		//  	{{myText|truncate:5}}
		//  	{{myText|truncate:25:" ->"}}
		// 
		//  Output
		//  	"This is..."
		//  	"Th..."
		//  	"This is an e ->"
		// 
		// ****************************************************
		.filter('truncate', function () {
			return function (text, length, end) {
				if (text !== undefined && text !== null) {
					if (isNaN(length)) {
						length = 21;
					}

					if (end === undefined) {
						end = "...";
					}

					if (text.length <= length) {
						return text;
					} else {
						return String(text).substring(0, length-end.length).replace(/^\s\s*/, '').replace(/\s\s*$/, '') + end;
					}
				} else {
					return false;
				}
			};
		});