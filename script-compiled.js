"use strict";

var sayHello = function sayHello() {
  return alert('Hello world!');
};
sayHello();

//Zadanie 1.

var string1 = "Hello";
var string2 = "Word";

console.log(string1 + " " + string2);

//Zadanie 2.

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

//Zadanie 3.

var average = function average() {
  for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }

  return arr.reduce(function (a, b) {
    return a + b;
  }) / arr.lenght;
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//Zadanie 4.

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

//Zadanie 5.

var array = [1, 4, 'Iwona', false, 'Nowak'];

var firstName = array[0],
    lastName = array[1],
    rest = array.slice(2);


console.log(firstName + " " + lastName);
