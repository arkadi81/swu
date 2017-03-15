/*jslint node: true */
/*jshint esversion: 6 */
'use strict';


// as per https://github.com/ideaq/learn-mocha

var assert = require("assert"); // node.js core module
var f = require('../recursive-fibonacci.js');

describe('fibonacci.js', function(){
	
  	it('fibonacci(10) should return 55', function(){
  		
      assert.equal(54, f.fibonacci(10)); 
    });
});



// describe('Fibonacci', function() {
//   it('fibonacci(10) should return 55', function() {
//     t = new TestObject();//var test = new TestObject([]);
//     expect(t.fibonacci(10)).to.equal(55);
//   });
// });

// 