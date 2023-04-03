// Practice problem 1
// You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ['Apple', 'Banana', 'Orange'];
// find the indexof 'Banana'
var findBanana = fruits.indexOf('Banana');
console.log(findBanana);
// replace 'Banana' with 'Mango'
fruits[1] = 'Mango';
console.log(fruits);
// remove 'Orange'
var removeOrange = fruits.pop();
console.log(removeOrange);
// add 'Watermelon'
fruits.push('Watermelon');
console.log(fruits);


// Practice problem 2

// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade
// Write a program to find your and your friends’ grades using if-else.






// Practice Problem 3

// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.
// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.
// Isosceles => two sides are equal