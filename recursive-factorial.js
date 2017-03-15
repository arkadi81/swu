/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

// description

var params = 8;

function f(params) {
	// recursive factorial function

	// error checking
	if (!Number.isInteger(params) || (params <= 0))  { 
		console.log('error with params = ', params);
		throw new Error('non pos integer input ');
	}

	// code here
	if (params > 1) {
		return params*f(params-1);
	}
	else { return 1;}
}


console.log('input: ', params);

console.log('solution: ', f(params));