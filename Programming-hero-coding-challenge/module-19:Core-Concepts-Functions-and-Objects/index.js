// practice problem

/* ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। */

// program to generate a multiplication table

// using function
function multiplication(number) {
  for (let i = 1; i <= 10; i++) {
    let result = i * number;
    console.log(`${number} * ${i} = ${result}`);
  }
}
multiplication(13);

// or/////////////////////

// take input from the user

const number = parseInt(prompt("Enter an integer: "));

//creating a multiplication table
for (let i = 1; i <= 10; i++) {
  // multiply i with number
  const result = i * number;

  // display the result
  console.log(`${number} * ${i} = ${result}`);
}

/* ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
Write a function that takes any name as uppercase or regular case and returns that name as lowercase as output in javascript.


https://www.freecodecamp.org/news/javascript-tolowercase-how-to-convert-a-string-to-lowercase-and-uppercase-in-js/
 */

function lowerCaseName(str) {
  return str.toLowerCase();
}
console.log(lowercaseName("NABILA"));

/* ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 

Create a function called fullName that takes the first part of your name and the last part of your name as parameters. And it will return your full name as the output by concatenating the two parts of your name.

*/

function fullName(str1, str2) {
  return str1 + " " + str2;
}

console.log(fullName("Nusrat", "Jahan"));

/* ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  
Write a function that if you give a number as input it will square that number and return that square.
*/

function square(x) {
  let result = x * x;
  console.log("square of the number is", result);
}
square(5);

/* ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :
const pizza = {
 toppings: ['cheese', 'sauce', 'pepperoni'],
 crust: 'deep dish',
 serves: 2
}
এবং pepperoni প্রিন্ট করবা।
*/

const pizza = {
  toppings: ["cheese", "sauce", "pepperoni"],
  crust: "deep dish",
  serves: 2,
};
console.log(pizza.toppings[2]);

// position number of 'pepperoni';
console.log(pizza.toppings.indexOf("pepperoni"));

// 6. practice problem 6
/* 1. write a function called foo() which prints "foo" and a function called bar() which prints "bar". Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output.

// foo name function korbo and console .log korbo foo ke. arekta function nibo bar, foo er moddhe jokhon console.log likhbo tar niche bar function call kore dibo. then foo function baire jeye foo function take call kore dibo

foo is an object of some kind, which you must have declared before using it. bar is the name of a function that is a member of the foo object.
*/

/*
The execution follows a similar flow as in the Python example:

foo() is called and it prints "foo" using console.log().
foo() then calls the bar() function.
Inside bar(), it prints "bar" using console.log().
Once bar() completes execution, control returns to foo(), and the function execution finishes.*/
function foo() {
  console.log("foo");
  bar();
}
function bar() {
  console.log("bar");
}
foo();

// 7. practice problem 7
/* Write a function called make_avg() which will take an three integers and return the average of those values.
 */

function make_avg(number1, number2, number3) {
  let sum = number1 + number2 + number3;
  let result = sum / 3;
  return result;
}
let average = make_avg(12, 10, 14);
console.log(average);

//8. practice problem 8

/* Challenging: write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */
// array er vitorer value gulor average kivabe ber kore
// javascript make array average of an elements

/*
function mean(arr) { // it's ok to use short variable names in short, simple functions
    // set all variables at the top, because of variable hoisting
    var i,
        sum = 0, // try to use informative names, not "num"
        len = arr.length; // cache arr.length because accessing it is usually expensive
    for (i = 0; i < len; i++) { // arrays start at 0 and go to array.length - 1
        sum += arr[i]; // short for "sum = sum + arr[i];"
    } // always use brackets. It'll save you headaches in the long run
    // don't mash your computation and presentation together; return the result.
    return sum / len;
}
*/
function make_avg(arr) {
  let result = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    result += arr[i];
  }
  return result / len;
}
let average = make_avg([12, 14, 46]);
console.log(average);

//9. practice problem 9:

/* write a function called odd_even() which takes an integer value and tells/return value whether this value is even or odd. you need to do it in 4 ways:
__has return + has parameter
__ no return + has parameter
*/

// __has return + has parameter
/*
In the first implementation, odd_even_with_return() takes an integer as a parameter (num) and uses the ternary operator to check if the number is divisible by 2. If it is, the function returns the string "Even"; otherwise, it returns "Odd".
*/
function odd_even(num) {
  return num % 2 ? "even" : "odd";
}
let result = odd_even(7);
console.log(result);

// __ no return + has parameter

/*
n the second implementation, odd_even_no_return() also takes an integer parameter (num). It performs the same check for divisibility by 2 but instead prints "Even" or "Odd" directly to the console, without returning any value.
*/

function odd_even(num) {
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
odd_even(4);

// 10. practice problem 10:
/*  you are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is (red) coloured. In this situation, if you try to cross the road, you may be in danger. If you notice a (yellow) colored traffic signal, you should stop. If you notice a (green) colored traffic signal, you should cross the road. So write a JS code, where there is a variable called (signal). Its value van be (green, yellow or red & we will get different activities as output depending on the variable). So, hurry up.
 */

//solve this using if.. else / switch

// video - 20.9:
//const color = 'yellow';
//const color = '';

const signal = "red";
if (signal === "yellow") {
  console.log("you should stop");
} else if (signal === "green") {
  console.log("you should cross the road");
} else {
  console.log("you may be in danger");
}

// alternative of (if-else) because it takes too much time to iterate

// switch
const signal = "yellow";
switch (signal) {
  case "yellow":
    console.log("you should stop");
    break;
  case "green":
    console.log("you should cross the road");
    break;
  default:
    console.log("you may be in danger");
}
