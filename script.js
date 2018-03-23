const sayHello = () => alert('Hello world!');
sayHello();



//Zadanie 1.

const string1 = "Hello";
const string2 = "Word";

console.log(`${string1} ${string2}`);


//Zadanie 2.

const multiply = (a, b = 1) => a * b;

console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));


//Zadanie 3.

const average = (...arr) => arr.reduce((a, b) => a + b)/arr.lenght;

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));


//Zadanie 4.

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));


//Zadanie 5.

const array = [1, 4, 'Iwona', false, 'Nowak'];

const [firstName, lastName, ...rest] = array;

console.log(`${firstName} ${lastName}`);