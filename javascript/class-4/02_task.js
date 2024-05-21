//todo? Print your birthday in the console using the Date object.
let myBdy = new Date('03-29-1995');
console.log(myBdy);

//todo? Print the current time in the console using the Date object.
let myDate = new Date();
console.log(myDate.getTime());

//todo? Print your current age in the console using the Date object.
let birthDate = new Date('03-29-1995');
let toDate = new Date('05-22-2024');
console.log(toDate.getFullYear('05-22-2024') - birthDate.getFullYear('03-29-1995'))

//What does the push method do in JavaScript arrays?
//In JavaScript, the push() method is used to add one or more elements to the end of an array and returns the new length of the array.

//What does the pop method do in JavaScript arrays?
//In JavaScript, the pop() method is used to remove the last element from an array and returns that element.

//Given the array let fruits = ["apple", "banana", "mango"];, what will be the result of fruits.push("orange");?

let fruits = ["apple", "banana", "mango"]
console.log(fruits);
fruits.push("orange")
console.log(fruits);

//Given the array let numbers = [1, 2, 3, 4, 5];, what will let last = numbers.pop(); do?
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers.pop());

//What will the following code output?
let colors = ["red", "green", "blue"];
colors.push("yellow");//["red", "green", "blue" , "yellow"]
colors.pop();//blue
console.log(colors);//["red", "green", "blue"]

//How can you add multiple elements to the end of an array in one push call?
let cars = ["Audi" , "BMW" , "Volkswagen"]
console.log(cars);
cars.push ("Ford" ,"Mercedes" , "Tesla" , "Nissan");
console.log(cars);

//What will be the result of the following code?
let stack = [4,5,25,225,345,1345];
stack.push(1);
console.log(stack);//[ 4, 5, 25, 225, 345, 1345, 1]
stack.push(2);
console.log(stack);//[ 4, 5, 25, 225, 345, 1345, 1, 2]
stack.push(3);
console.log(stack);//[ 4, 5, 25, 225, 345, 1345, 1, 2, 3]
stack.pop();
console.log(stack.pop());//2
stack.pop();
console.log(stack.pop());//1345
console.log(stack);//[ 4, 5, 25, 225, 345 ]

//Explain the following code:
let letters = ["a", "b"];
letters.push("c", "d");
console.log(letters);//[ 'a', 'b', 'c', 'd' ]
let lastLetter = letters.pop();
console.log(letters);//[ 'a', 'b', 'c' ]
console.log(lastLetter);//d

//How can you check the length of an array after using push or pop?
let mobile = ["realme" , "oneplus" , "samsung"]
console.log(mobile);
mobile.push ("apple");
console.log(mobile);//[ 'realme', 'oneplus', 'samsung', 'apple' ]
mobile.pop();
console.log(mobile.pop());//samsung
console.log(mobile);//[ 'realme', 'oneplus' ]
console.log(mobile.length);//2

//What will be the output of the following code?
let myArray = [10, 20, 30];
myArray.push(40);
console.log(myArray.pop());//40
console.log(myArray);//[ 10, 20, 30 ]
















