//node function-arrow-function.js

//-----------------------------------------------------------------------------
/*JavaScript Function

1.Regular Function  //global 
1.No name Function
3.Arrow Function (E6) 
-----------------------------------------------------------------------------
*/

//Regular Function
function sum(a, b) {
  return a + b;
}

var value = sum(10, 15); //invokes sum function
console.log("sum(10, 15):" + value);

//========================================

function printLog(message) {
  console.log(message);
}

printLog("Call Printlog:" + value);

//=================================================================
var functionLikeVariable = "sum(10, 15) : [" + sum(11, 23) + "].";
printLog(functionLikeVariable);

//
//
//-----------------------------------------------------------------------------
//JavaScript Arrow Function E6
//-----------------------------------------------------------------------------

let sum2 = (a, b) => a + b;
printLog("call arrow funtion:" + sum2(12, 3));

//============================================
function randomNumber() {
  return Math.random;
}

let randomNumber2 = () => Math.random;

printLog("Regular Function randomNumber:" + randomNumber());
printLog("Arrow funtion randomNumber2:" + randomNumber2());

//=====================================
function myRegularFunction() {
  const myArrowFunction = () => {
    console.log(arguments);
  };

  myArrowFunction("c", "d");
}

myRegularFunction("a", "b"); // logs { 0: 'a', 1: 'b' }
