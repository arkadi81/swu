/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

// description

var params = 10;

function fibonacci(n) {
	switch (n) {
	    case 0: return 0;
	   	case 1: return 1;
   		default: return fibonacci(n - 2) + fibonacci(n - 1);
	}
	
}


console.log('input: ', params);

console.log('solution: ', fibonacci(params));

module.exports.fibonacci = fibonacci;
// 