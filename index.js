/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

function myFunc() {
	console.log('hello');
}

//myFunc();

var stocks = [10,7,5,8,11,9];

function getMaxProfit(stocks) {

	//tests
	// O(n)

	if (stocks.length === 0) { throw new Error('stocks empty');}
	// stores max and min with indexes, runs once parallel
	var LIndex = 0;
	//var RIndex = 1;
	var Lmin = stocks[0];
	var Rmax = stocks[1];

	var maxDiff = Rmax - Lmin;

	for (var RIndex=2; RIndex<stocks.length; RIndex++) {
		if (stocks[RIndex] > Rmax ) {
			// this condition also guarantees the difference increases
			Rmax = stocks[RIndex];
			maxDiff = Rmax - Lmin;
		}
		
		// advance LIndex until it hits 1 prior to RIndex
		while (LIndex < RIndex -1) {
			LIndex++;
			if (Rmax - stocks[LIndex] > maxDiff) {
				Lmin = stocks[LIndex];
				maxDiff = Rmax - Lmin;
			}
		}

		
	}

	console.log('Rmax: ', Rmax);
	console.log('Lmin: ', Lmin);
	console.log('max profit: ', maxDiff);
	return maxDiff;



}

getMaxProfit(stocks);