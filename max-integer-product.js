/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

//  solution to 
// https://www.interviewcake.com/question/python/highest-product-of-3
// given an array of at least 3 integers, find the highest possible product.
// note: not given that all integers are positive - may have to break into case where integers are
// neg, or assume only working by abs value.
// naive approach: greedy. find 3 highest integers, multiply.

var numbers = [1,7,3,4,0,-2,5];

function maxProd3(arr) {

	var res;
	// check input for non empty, all numeric
	if (arr.some(isNaN)) { throw new Error('array is not numeric'); }
	if (arr.length < 3 ) { throw new Error('<3 length array'); }
	
	// go through array, find 3 highest integers.
	// array not necesserily sorted.

	//TODO checks for neg numbers - cannot assume negatives absent or abs vals
	var n1 = Math.max(arr[0],arr[1],arr[2]);
	var n3 = Math.min(arr[0], arr[1], arr[2]);
	var n2 = Math.min(n1, arr[2]); n2 = Math.max(arr[2], n3);
	for (var i=3; i<arr.length; i++) {
		if (arr[i] > n3) {
			// actually need to change something
			n3 = Math.min(n2, arr[i]);
			n2 = Math.min(n1, arr[i]);
			n1 = Math.max(n1, arr[i]);
		}
		
	}
	res = n1*n2*n3;
	console.log('n1 = ', n1);
	console.log('n2 = ', n2);
	console.log('n3 = ', n3);
	return res;
}

console.log("highest product of 3 ints is: ", maxProd3(numbers));