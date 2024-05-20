// Declare a variable

let num = 10;
console.log("The output is:",num);// to print the output

let Num = 100;
console.log("The output of Num:", Num);
//space dosen't allow while declaring variable.
//let second num = 1000;

//let 01num = 50; it doesn't allow numbers in the begining.


//snake_case
let second_num = 1000;
//camelCase
let secondNum = 1000; 

let decimal_num = 15.35;
console.log(decimal_num);

// to check data type use 'typeof' operator
console.log(typeof decimal_num);

//string
//1. String is a collection of characters.
//2. string is a primitive data type.
let name = "Smruti"
console.log("My name is:",name);//0utput: My name is: Smruti
//`` - backtick
console.log(`My name is: ${name}`);
console.log(typeof name);

//fun fact:
let number = "10";
console.log(typeof number); //output: string

let string = 10;
console.log(typeof string);// output: number

// BigInt :

// BigInt is a new data type in JavaScript that can represent integers of any size. It is used to store integers that are too large or too small.

let bigInt = 1000000000000000;
console.log(bigInt);

// Null :

let result = null; // null : void / empty;
console.log(typeof result); // null

// Undefined :

// let value = undefined;
let value; // nothing is assigned.
console.log(value); // undefined
console.log(typeof value); // undefined

// Boolean :

let isMarried = false;
console.log(typeof isMarried); // boolean
console.log(!isMarried); // true

// Symbol :

// Symbol is a data types in JS to produce unique key values and it's introduced in ES6.
// It is used to create unique identifiers for objects.

let symbol1 = Symbol("abc"); // differnet value
let symbol2 = Symbol("def"); // differnet value
console.log(symbol1 === symbol2); // false

console.log(symbol1.description);
console.log(symbol2.description);

// NaN :
// NaN is a data type in JS that represents a non-numeric value. It is used to represent values that are not numbers, such as 1 , 2 , 3 ... etc"

let num_value1 = 100;
let num_value2 = "150";
console.log(num_value1 + num_value2); // 100150 

let output = 0 / 0;
console.log(output); // NaN(Not a Number)



