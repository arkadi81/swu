/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

//  solution to https://www.interviewcake.com/question/javascript/product-of-other-numbers
// given an array of numbers, function will return an array of same size where each element is product-of-other-numbers
// except the number at corresponding index. minimum complexity desired, no division allowed
// again, greedy algorithm, O(n) x2

// the divide and conquer solution isnt obvious, but can be obtained by starting brute force O(n^2)
// looking at sample outputs and calculations and thinking of ways to optimize repeating calculations.

var numbers = [1,7,3,4];

function prodNoIndex(arr) {
	// check input for non empty, all numeric
	if (arr.some(isNaN)) { throw new Error('array is not numeric'); }
	if (arr.length === 0 ) { throw new Error('0 length array'); }
	var res = [];
	var allButCurrent = 1; // will store all numbers except for current, and catch up after
	// based on hint: break into two parts: create arr of products before each index and after
	// each individual problem is greedy.

	// return arr with products before each index - greedy
	var prodBefore = [1];
	var s = 1; // keeps products before current

	for (var i = 1; i<arr.length; i++) {
		prodBefore[i] = s*arr[i-1];
		s *= arr[i-1];
	}
	console.log('original array is: ', arr);
	console.log('prodBefore: ', prodBefore);

	// return arr with products after each index - greedy
	
	var prodAfter = Array(arr.length);
	s = 1;
	prodAfter[arr.length-1]=1;

	for (i = arr.length-2; i>=0; i--) {
		prodAfter[i] = s*arr[i+1];
		s *= arr[i+1];
	}
	console.log('prodAfter: ', prodAfter);

	// combine
	for (i=0 ;i<arr.length; i++) {
		res.push(prodBefore[i]*prodAfter[i]);
	}



	return res;
}

console.log("result is: ", prodNoIndex(numbers));