// Practice problem 1
// You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ['Apple', 'Banana', 'Orange'];
// find the indexof 'Banana'
var bananaIndex = fruits.indexOf('Banana');
console.log(bananaIndex);
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

var score = 85;
// var tomTotalScore = 66;
// var janeTotalScore = 95;
// var peterTotalScore = 56;
// var johnTotalScore = 40;

if(score >= 80){
    console.log("A grade");
}
else if(score >= 60){
    console.log("B grade");
}
else if(score >= 50){
        console.log("C grade");
    }
else if(score >= 40){
        console.log("D grade");
    }
else{
    console.log("F grade");
    }




// Practice Problem 3

// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.
var num1 = 13;
var num2 = 79;
var num3 = 45;
var largest;
if(num1 > num2){
    if(num1 > num3){
        console.log(num1);
    }    
    else{
        console.log(num3);
    }
}
else{
    if(num2 > num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}

// if(num1 > num2 && num1 > num3){
//     console.log(num1);    
// }
// else if(num2 > num1 && num2 > num3){
//     console.log(num2); 
// }
// else{
//     console.log(num3); 
// }



// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.
// Isosceles => two sides are equal
var side1 = 9;
var side2 = 8;
var side3 = 9;
if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log("Isosleces");
}
else {
    console.log("not isosleces");
}