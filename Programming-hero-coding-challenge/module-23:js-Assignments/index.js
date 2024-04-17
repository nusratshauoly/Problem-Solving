/*
1. First Problem 
You will be given a function called mindGame("which will take a positive number as input.")
Now your task: You have to multiply that number by 3, then add 10, then divide by 2, then subtract 5, and return the output. in javascript
Sample Input & Output
Input: 5
Output: 7.5
Input: 50
Output: 75
Input: 33
Output: 49.5
*/
function mindGame(number) {
  let result = ((number * 3) + 10) / 2 - 5;
  return result;
}

console.log(mindGame(5));  // Output: 7.5
console.log(mindGame(50)); // Output: 75
console.log(mindGame(33)); // Output: 49.5

/*

////////////////////////////////////////

/*
1.5 : You will be given a function called mindGame("which will take a positive number as input.")
Now your task: You have to multiply that number by 3, then add 10, then divide by 2, then subtract 5, and return the output. in javascript and take input value from user
Sample Input & Output
Input: 5
Output: 7.5
Input: 50
Output: 75
Input: 33
Output: 49.5

*/

function mindGame(number) {
  let result = ((number * 3) + 10) / 2 - 5;
  return result;
}

// Prompt the user for input
let userInput = prompt("Enter a positive number:");

// Convert the user input to a number
let number = parseFloat(userInput);

// Call the mindGame function with the user input and display the result
let output = mindGame(number);
console.log(output);




/*
2. Second Problem

*funtion name (evenOdd) dibo

//kono 1 ta string k input hishebe nibo and ei string er moddhe koyta character ache shei character er number jodi jor(even) hoy tahole ('even') eta return korbo. r jodi bijor(odd) hoy tahole ('odd') return korbo.


//example: 'jack ma' : jodi hoy space takeo count korte hobe = return dibe (odd) karon 7 character ache.

Problem 2: Finding even or odd

You will be given a function called evenOdd(). It will take a string as input.
Now you have to give the output based on the total number of characters in your task: String. Output will be 'even' or 'odd'. Sample Input & Output:

Input: ‘Phero’
Output: odd
Input: ‘Batch7’
Output: even
Input: ‘chatgpt’
Output: odd


*/

function evenOdd(str) {
  if (str.length % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

console.log(evenOdd('Phero'));    // Output: odd
console.log(evenOdd('Batch7'));   // Output: even
console.log(evenOdd('chatgpt'));  // Output: odd

// 2.5 : second problem take input from user

function evenOdd(inputString) {
  let length = inputString.length;
  if (length % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

// Prompt the user for input
let userInput = prompt("Enter a string:");

// Call the evenOdd function with the user input and display the result
let output = evenOdd(userInput);
console.log(output);

//////////////////////////////////////////////


/*
3. Third Problem

*function name (isLGSeven) dibo

//----> kono 1 number input hishebe nibo.     
------> shei number er theke 7 (-) korbo
------> je answer pabo (-) korar por sheta jodi 7 er cheye choto hoy  tahole oi number ta return kore dibo
------> r jodi minus answer 7 er cheye shoman or boro hoy tahole je input number nisi sheta  double / digun kore return korbo.

Problem 3: Is Less or Greater than seven

You will be given a function called “isLGSeven()”. It will take a number as input.
Now your task: you have to find the difference between the input value and 7. If this difference is smaller than 7, you must return the subtraction. Otherwise you must return double of the input. Means twice the number you took as input.

Input : 6
Output: -1

*/

function isLGSeven(number) {
  const difference = number - 7;
  
  if (difference < 7) {
    return difference;
  } else {
    return number * 2;
  }
}
console.log(isLGSeven(6));  // Output: -1


/*
3.5: You will be given a function called “isLGSeven()”. It will take a number as input.
Now your task: you have to find the difference between the input value and 7. If this difference is smaller than 7, you must return the subtraction. Otherwise you must return double of the input. Means twice the number you took as input . in javascript and take input from user

Input : 6
Output: -1 

*/

function isLGSeven(number) {
  let difference = number - 7;
  
  if (difference < 7) {
    return difference;
  } else {
    return number * 2;
  }
}

// Prompt the user for input
let userInput = prompt("Enter a number:");

// Convert the user input to a number
let number = parseFloat(userInput);

// Call the isLGSeven function with the user input and display the result
let output = isLGSeven(number);
console.log(output);

////////////////////////////////////////////

/*
4. Fourth Problem

*function name (findingBadData) dibo

// ----> age er numbers ache erokom ekta array input hishebe nibo [1, 45 13]{valid data} and [12, -2, 0, -15, -11] {2 invalid / minus data}
-------> return korbo koyta age negative age dise (suppose result pabo 3)

Problem 4: Finding Bad data

You will be given a function called findingBadData(). It will take an array as input. Any number of numbers will be in the array. Numbers can be negative numbers (less than zero) and positive numbers (greater than or equal to zero). If any number is negative we will call it "Bad Data". If a number is positive, we will call it "Good Data".
Now you have to find out how many bad data are there in your task: array and return that number.

Sample Input & Output:-
Input: [ 1,2,5 ]
Output: 0
Input: [ 2, -5, -7, -13 ]
Output: 3
Input: [ -4, -9, -5, -33, -55 ]
Output: 5
*/


function findingBadData(arr) {
  let badDataCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      badDataCount++;
    }
  }

  return badDataCount;
}

console.log(findingBadData([1, 2, 5]));                // Output: 0
console.log(findingBadData([2, -5, -7, -13]));        // Output: 3
console.log(findingBadData([-4, -9, -5, -33, -55]));  // Output: 5

/* 4.5: You will be given a function called findingBadData(). It will take an array as input. Any number of numbers will be in the array. Numbers can be negative numbers (less than zero) and positive numbers (greater than or equal to zero). If any number is negative we will call it "Bad Data". If a number is positive, we will call it "Good Data".
Now you have to find out how many bad data are there in your task: array and return that number. in javascript and take input from users

Sample Input & Output:-
Input: [ 1,2,5 ]
Output: 0
Input: [ 2, -5, -7, -13 ]
Output: 3
Input: [ -4, -9, -5, -33, -55 ]
Output: 5
*/

function findingBadData(arr) {
  let count = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  
  return count;
}

// Prompt the user for input
let userInput = prompt("Enter numbers separated by commas:");

// Convert the user input to an array
let arr = userInput.split(",").map(Number);

// Call the findingBadData function with the user input array and display the result
let output = findingBadData(arr);
console.log(output);

///////////////////////////////////////////////

/*
5. Fifth Problem

*function name (gemsToDiamond) dibo

// ----> 3 jon friends different number gems ache , eguloke diamond banate hobe. 
------> first friend er koyta gem ache eta 1st parameter, second friend er koyta gem ache eta 2nd parameter hobe, third friend er koyta gem ache eta 3rd parameter hobe.
------> 3 ta input parameter
------> ist friend er gem guloke 21 diye (*) korbo.
------> 2nd friend er gem guloke 32 diye (*) korbo.
------> 3rd friend er gem guloke 43 diye (*) korbo.
------> shob gunfol k add kore total number banabo
------> shei total number ta jodi 1000 er digun / double er cheye shoman / beshi hoy tahole oi number theke 2000 biyog kore oi biyogfol ta return korba.
------> shei total number ta jodi 1000 er digun / double er cheye kom hoy tahole oi number tai return kore dibo.

Problem 5: Convert your gems into diamond

You will be given a function called gemsToDiamond(). It will take three numbers (the number of gems of your 3 friends) as input.
Power of gems per 1st friend = 21
Power of gems per 2nd friend = 32
Power of gems per 3rd friend = 43
[Gems capacity means how many diamonds a gem can be converted into. ]
Now your task: you have to figure out how many diamonds you will get in total by combining the gems of all your friends. If the number of total diamond is over 1000, then you will get as many diamonds as are left by subtracting 2000 from the total diamond.

Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303

*/

function gemsToDiamond(gems1, gems2, gems3) {
  const power1 = 21;
  const power2 = 32;
  const power3 = 43;

  const totalDiamonds = (gems1 * power1) + (gems2 * power2) + (gems3 * power3);

  if (totalDiamonds > 1000) {
    return totalDiamonds - 2000;
  } else {
    return totalDiamonds;
  }
}

console.log(gemsToDiamond(1, 1, 1));         // Output: 96
console.log(gemsToDiamond(20, 200, 50));    // Output: 6970
console.log(gemsToDiamond(100, 5, 1));      // Output: 303
/*

5.5: You will be given a function called gemsToDiamond(). It will take three numbers (the number of gems of your 3 friends) as input.
Power of gems per 1st friend = 21
Power of gems per 2nd friend = 32
Power of gems per 3rd friend = 43
[Gems capacity means how many diamonds a gem can be converted into. ]

Now your task: you have to figure out how many diamonds you will get in total by combining the gems of all your friends. If the number of total diamond is over 1000, then you will get as many diamonds as are left by subtracting 2000 from the total diamond in javascript and take input from user

Sample Input & Output:-
Input: 1, 1, 1
Output: 96
Input: 20, 200, 50
Output: 6970
Input: 100, 5, 1
Output: 303
*/

function gemsToDiamond(gems1, gems2, gems3) {
  const power1 = 21;
  const power2 = 32;
  const power3 = 43;

  let diamonds = (gems1 * power1) + (gems2 * power2) + (gems3 * power3);

  if (diamonds > 1000) {
    diamonds -= 2000;
  }

  return diamonds;
}

// Prompt the user for input
let userInput = prompt("Enter the number of gems for each friend separated by commas:");

// Convert the user input to an array
let gems = userInput.split(",").map(Number);

// Call the gemsToDiamond function with the user input and display the result
let output = gemsToDiamond(gems[0], gems[1], gems[2]);
console.log(output);

// -------------------------------------------------

/*
Qs: Create a function using the  "function" keyword that takes a String as an argument and returns the number of vowels in the string.
*/

function countVowels(str) {
  let count = 0;
  for (let char of str) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === 'u') {
      count++;
    }
  }
  return count;
}
console.log(countVowels("see you Now"));

/*
Qs : create an arrow function to perform the same task.
*/
const countVow = (str) => {
  let count = 0;
  for (let char of str) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === 'u') {
      count++;
    }
  }
  return count;
}
console.log(countVow("Now you know me");

/*
QS: For a given array of numbers, print the square of each value using the forEach loop.
*/
let nums = [2, 3, 4, 5, 6];

nums.forEach((num) => {
    console.log(num * num); // num ** 2
});

//  ------------- solve using arrow function --------------
let numbers = [67, 52, 39];
let calcSquare = (num) => {
    console.log(num * num);
};
numbers.forEach(calcSquare);
/*
Qs: We are given array of marks of students. Filter out of the marks of students that scored 90+
*/
let marks = [97, 64, 32, 49, 99, 96, 86];

let toppers = marks.filter((val) => {
    return val > 90;
})
console.log(toppers);
/*
Qs: Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array.
*/

// Take input from the user
let n = parseInt(prompt("Enter a number:"));

// Create an array of numbers from 1 to n
let numbers = [];
for (let i = 1; i <= n; i++) {
    numbers.push(i);
}

// Calculate the sum of all numbers in the array using reduce method
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Calculate the product of all numbers in the array using reduce method
let product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log("Array of numbers:", numbers);
console.log("Sum of all numbers:", sum);
console.log("Product of all numbers:", product);




//////////////////////////////////////////////////////////

/*
Problem 1 (basic Math)
Tomake cubeNumber() nam e 1 ta function deya hoyeche. Function ta 1 ta positive input number nibe.
Task:
Input number take cube kore result ta return korbe function theke.
Bonus: input hishebe number type er poriborte onno kichu dile tumi ekta meaningful message return kore dibe function theke.


Sample Input
Sample Output
3
27
4
64


*/
function cubeNumber(number) {
    if (Number.isInteger(number) && number > 0) {
        return Math.pow(number, 3);
    }
    else {
        return "Please Enter a Positive Number";
    }
}
console.log(cubeNumber(3));

/////////////////////////////////////////////////

/*

Problem 2  (basic Math)

Tomake 1 ta function deya hobe called “matchFinder()” ja input hishebe 2 ta string nibe.

Task:
Jodi prothom string tir kono 1ti ongsher shathe 2nd strintir puropuri mil khuje pao tahole tumi true return korbe.
R jodi puropuri mil khuje na pao tahole false return korbe.
Bonus: 2ti input string deya holo kina sheta validate korbe. Jodi 2ti ba jekono 1ti input string na hoy tahole tumi 1ta meaningful message return return korbe.


Sample Input
Sample Output
“John Doe”, “ohn”
true
“Javascript”, “Code”
false
“Peter Parker”, “Pen”
false
“Peter Parker”, “pet”
false
*/

// ------------------------------ first solution ---------------------------------
function matchFinder(str1, str2) {
    // Validate input strings
    if (typeof str1 !== 'string' || typeof str2 !== 'string' || str1.length === 0 || str2.length === 0) {
        return "Please provide two non-empty strings as input.";
    }

    // Check if any substring of str2 matches str1
    for (let i = 0; i <= str2.length - str1.length; i++) {
        if (str2.substring(i, i + str1.length) === str1) {
            return true;
        }
    }
    
    return false;
}

// Test the function
console.log(matchFinder("John Doe", "John Doe"));  // Output: true
console.log(matchFinder("Javascript", "Code"));  // Output: true
console.log(matchFinder("Peter Parkar", "pen"));      // Output: true
console.log(matchFinder("Peter", "pet"));          // Output: false


//  ---------------------------------- Second Solution ----------------------------------------
function matchFinder(str1, str2) {
    return typeof str1 === 'string' && typeof str2 === 'string' && str1.length > 0 && str2.length > 0 && str2.includes(str1);
}

// Test the function
console.log(matchFinder("John Doe", "ohn"));       // Output: true
console.log(matchFinder("Javascript", "Code"));    // Output: false
console.log(matchFinder("Peter Parkar", "Pen"));   // Output: false
console.log(matchFinder("Peter Parkar", "Peter")); // Output: true


// --------------------------- third solution --------------------------
function matchFinder(str1, str2) {
    // Check if both inputs are strings and non-empty
    if (typeof str1 !== 'string' || typeof str2 !== 'string' || str1.length === 0 || str2.length === 0) {
        return "Please provide two non-empty strings as input.";
    }

    // Check if str2 includes str1 as a substring
    return str2.includes(str1);
}

// Test the function
console.log(matchFinder("John Doe", "ohn"));       // Output: true
console.log(matchFinder("Javascript", "Code"));    // Output: false
console.log(matchFinder("Peter Parkar", "Pen"));   // Output: false
console.log(matchFinder("Peter Parkar", "Peter")); // Output: true

///////////////////////////////////////////////////
/*

Problem 3
Tomake 1ta function likhte hobe jar nam hobe sortMaker(). Ei function parameter hobe 1ti array and ei array te shobshomoy 2ti upadan thakbe.

Task:  
Jodi array er 2ti upadan positive number hoy tahole tumi array tike boro theke choto krome shajiye return korbe.
Jodi 2ti upadan eki hoy tahole tumi ei string return korbe: “equal”
Bonus: jodi array er jekono 1ti upadan negative number hoy tahole tumi return korbe “invalid input”


Sample Input
Sample Output
[2, 3]
[3, 2]
[4, 2]
[4, 2]
[4, 4] 
equal
[1, 2]
[2, 1]
[4, -2]
Invalid Input
*/

function sortMaker(arr) {
    // Validate input
    if (!Array.isArray(arr) || arr.length !== 2 || !arr.every(num => typeof num === 'number')) {
        return "Invalid Input";
    }
    // Check if both elements are positive
    else if (arr[0] > 0 && arr[1] > 0) {
        // Sort the array in ascending order
        return arr.sort((a, b) => a - b);
    }
    // Check if both elements are equal
    else if (arr[0] === arr[1]) {
        return "equal";
    }
    // If any element is negative
    else {
        return "Invalid Input";
    }
}
// Test cases
console.log(sortMaker([2, 3])); // Output: [2, 3]
console.log(sortMaker([3, 2])); // Output: [2, 3]
console.log(sortMaker([4, 2])); // Output: [2, 4]
console.log(sortMaker([4, 4])); // Output: equal
console.log(sortMaker([1, 2])); // Output: [1, 2]
console.log(sortMaker([2, 1])); // Output: [1, 2]
console.log(sortMaker([4, -2])); // Output: Invalid Input




//////////////////////////////////////////////

/*

Problem 4
Tomake 1 ta function deya hobe called “findAddress()” ja input hishebe 1ti object nibe. Object er 3ti property thakbe.

Task:
Tomake first sample output er format e output return korte hobe.
Bonus: jodi object er kono property missing thake tahole shei ongsho tuku double underscore diye replace hobe. (second output er format e)


Input
Output
{street: 10, house: 15A, Society: “Earth Perfect”}
10, 15A, Earth Perfect
{street: 10, society: “Earth Perfect”}
10, __, Earth Perfect
{street: 10}
10,__, __
*/


// ------------------ first problem solve ------------------
function findAddress(obj) {
    let street = obj.street !== undefined ? obj.street : '__';
    let house = obj.house !== undefined ? obj.house : '__';
    let society = obj.Society !== undefined ? obj.Society : '__';
    
    return `${street}, ${house}, ${society}`;
}
console.log(findAddress({street: 10, house: '15A', Society: 'Earth Perfect'})); // Output: 10, 15A, Earth Perfect
console.log(findAddress({street: 10, society: 'Earth Perfect'})); // Output: 10, __, Earth Perfect
console.log(findAddress({street: 10})); // Output: 10, __, __



//  -------------------------- Bonus Problem solve ----------------------
function findAddressBonus(obj) {
    let street = obj.street !== undefined ? obj.street : '__';
    let house = obj.house !== undefined ? obj.house : '__';
    let society = obj.Society !== undefined ? obj.Society : '__';
    
    return `${street}, ${house}, ${society}`.replace(/(__+)/g, '__');
}

console.log(findAddressBonus({street: 10, house: '15A', Society: 'Earth Perfect'})); // Output: 10, 15A, Earth Perfect
console.log(findAddressBonus({street: 10, society: 'Earth Perfect'})); // Output: 10, __, Earth Perfect
console.log(findAddressBonus({street: 10})); // Output: 10, __, __

////////////////////////////////////////////

/*

Problem 5:
Tumi dokane 1ta chips kinte gela kichu khuchra takar note niye. 1 ta canPay() nam e function banao jeta 2 ta input nei: 1 ta array and arekta number.

Array er prottekta element tomar khuchra taka bujhay
1 taka
2 taka
5 taka

Second input ta bujhay chips er dam.

Task:
Jodi khuchra taka gulo jog kore chips er dam ba tar beshi hoy tahole true return korbe.
R jodi notegulor jogfol chips er damer cheye kom hoy tahole false return korbe.
Bonus: : Input er first upadan empty array kina check korbe. Empty array hole meaningful message return kore nibe.
 

Sample Input
Sample Output
[1, 2, 5], 10
false
[1, 5, 5], 10
true
*/
function canPay(notes, chipsPrice) {
    // Check if the input array is empty
    if (notes.length === 0) {
        return "Empty array provided";
    }

    // Calculate the total amount of money in the notes array
    const totalMoney = notes.reduce((acc, curr) => acc + curr, 0);

    // Check if the total money is greater than or equal to the chips price
    return totalMoney >= chipsPrice;
}

// Test cases
console.log(canPay([1, 2, 5], 10)); // Output: false
console.log(canPay([1, 5, 5], 10)); // Output: true

/////////////////////////////////


/*
CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

*/

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark  / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn, markHigherBMI);

////////////////////////////////////////////////////

/*
CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);



/* Write your code below. Good luck! 🙂 */
if(BMIMark > BMIJohn){
    
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`)
}
else{
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`)
}


////////////////////////////////////////////////////

/*
CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy 🏆");
}
else if(scoreKoalas > scoreDolphins){
    console.log("Koalas win the trophy 🏆");
}
else if(scoreDolphins === scoreKoalas){
    console.log("Both win the trophy 🏆");
}
else{
    console.log("No one win the trophy");
}



/////////////////////////////////////////////////////

/*
CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

*/


const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


/////////////////////////////////////////////////

/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

*/

const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
}
// test data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  }
  else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏅 (${avgKoalas} vs. ${avgDolphins})`);
  }
  else {
    console.log('No team wins...');
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// test 2 
let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);



////////////////////////////////////////////////////

/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.

*/
const calcTip = function (bills) {
  return bills <= 50 && bills >= 300 ? bills * 0.15 : bills * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);




////////////////////////////////////////////////////////

/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).


*/
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }

}
mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}




///////////////////////////////////////////////////////////


/*
CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!


TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.


BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++){
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

// bonus
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 4]));
console.log(calcAverage(tips));
console.log(calcAverage(totals));