"use strict";

// didn't use var
// foo = "Hello world";
var foo = "Hello world";

// new object with two properties with the same name
// var myObject = { samename: 1, samename: 2 };
var myObject = {samename: 1, differentname: 2};

// function with the same name for multiple parameters
// function myFunction( a,b,a) {
//    return a + b + c;
// }
function myFunction(a,b,c){
	return a + b + c;
}

document.getElementById("mainContent").innerHTML = foo;

