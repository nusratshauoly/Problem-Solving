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
  let result = (number * 3 + 10) / 2 - 5;
  return result;
}

console.log(mindGame(5)); // Output: 7.5
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
  let result = (number * 3 + 10) / 2 - 5;
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
    return "even";
  } else {
    return "odd";
  }
}

console.log(evenOdd("Phero")); // Output: odd
console.log(evenOdd("Batch7")); // Output: even
console.log(evenOdd("chatgpt")); // Output: odd

// 2.5 : second problem take input from user

function evenOdd(inputString) {
  let length = inputString.length;
  if (length % 2 === 0) {
    return "even";
  } else {
    return "odd";
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
console.log(isLGSeven(6)); // Output: -1

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

// ----> age er numbers ache erokom ekta array input hishebe nibo [1, 45, 13]{valid data} and [12, -2, 0, -15, -11] {2 invalid / minus data}
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

console.log(findingBadData([1, 2, 5])); // Output: 0
console.log(findingBadData([2, -5, -7, -13])); // Output: 3
console.log(findingBadData([-4, -9, -5, -33, -55])); // Output: 5

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
// This line of JavaScript code takes a string of comma-separated values (likely numbers) from userInput, splits it into an array, and then converts each item to a number.
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
---------------- Problem 5: Convert your gems into diamond ----------------
You will be given a function called gemsToDiamond(). It will take three numbers (the number of gems of your 3 friends) as input.
Power of gems per 1st friend = 21
Power of gems per 2nd friend = 32
Power of gems per 3rd friend = 43
[Gems capacity means how many diamonds a gem can be converted into. ]
Now your task: you have to figure out how many diamonds you will get in total by combining the gems of all your friends. If the number of total diamond is over 1000, then you will get as many diamonds as are left by subtracting 2000 from the total diamond.
--------------- Sample Input & Output:- --------------------
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

  const totalDiamonds = gems1 * power1 + gems2 * power2 + gems3 * power3;

  if (totalDiamonds > 1000) {
    return totalDiamonds - 2000;
  } else {
    return totalDiamonds;
  }
}

console.log(gemsToDiamond(1, 1, 1)); // Output: 96
console.log(gemsToDiamond(20, 200, 50)); // Output: 6970
console.log(gemsToDiamond(100, 5, 1)); // Output: 303
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

  let diamonds = gems1 * power1 + gems2 * power2 + gems3 * power3;

  if (diamonds > 1000) {
    diamonds -= 2000;
  }

  return diamonds;
}

// Prompt the user for input
let userInput = prompt(
  "Enter the number of gems for each friend separated by commas:"
);

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
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("see you Now"));
// Qs : create an arrow function to perform the same task.
const countVow = (str) => {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};
console.log(countVow("Now you know me"));

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
});
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
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
// Calculate the product of all numbers in the array using reduce method
let product = numbers.reduce(
  (accumulator, currentValue) => accumulator * currentValue,
  1
);
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
  } else {
    return "Please Enter a Positive Number";
  }
}
console.log(cubeNumber(3));

/////////////////////////////////////////////////

/*
Problem 2  (basic Math)

Tomake 1 ta function deya hobe called “matchFinder()” ja input hishebe 2 ta string nibe.

Task:
Jodi prothom string tir kono 1ti ongsher shathe 2nd stringtir puropuri mil khuje pao tahole tumi true return korbe.
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
  if (
    typeof str1 !== "string" ||
    typeof str2 !== "string" ||
    str1.length === 0 ||
    str2.length === 0
  ) {
    return "Please provide two non-empty strings as input.";
  }
  // Check if any substring of str2 matches str1
  // Perform case-insensitive substring check using `toLowerCase()`
  return str2.toLowerCase().includes(str1.toLowerCase());
}
// Test the function
console.log(matchFinder("John Doe", "John Doe")); // Output: true
console.log(matchFinder("Javascript", "Code")); // Output: true
console.log(matchFinder("Peter Parkar", "pen")); // Output: true
console.log(matchFinder("Peter", "pet")); // Output: false

// *******  ---------------------------------- Second Solution ----------------------------------------
function matchFinder(str1, str2) {
  return (
    typeof str1 === "string" &&
    typeof str2 === "string" &&
    str1.length > 0 &&
    str2.length > 0 &&
    str1.includes(str2)
  );
}

// Test the function
console.log(matchFinder("John Doe", "ohn")); // Output: true
console.log(matchFinder("Javascript", "Code")); // Output: false
console.log(matchFinder("Peter Parkar", "Pen")); // Output: false
console.log(matchFinder("Peter Parkar", "Peter")); // Output: true

// --------------------------- third solution --------------------------
function matchFinder(str1, str2) {
  // Check if both inputs are strings and non-empty
  if (
    typeof str1 !== "string" ||
    typeof str2 !== "string" ||
    str1.length === 0 || // Ensure str1 is not an empty string
    str2.length === 0
  ) {
    return "Please provide two non-empty strings as input.";
  }

  // Check if str2 includes str1 as a substring
  return str1.includes(str2);
}

// Test the function
console.log(matchFinder("John Doe", "ohn")); // Output: true
console.log(matchFinder("Javascript", "Code")); // Output: false
console.log(matchFinder("Peter Parkar", "Pen")); // Output: false
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
  // ✅ Validate input:
  // - Check if `arr` is an array
  // - Ensure it contains exactly 2 elements
  // - Ensure both elements are numbers
  if (
    !Array.isArray(arr) ||
    arr.length !== 2 ||
    !arr.every((num) => typeof num === "number")
  ) {
    return "Invalid Input"; // Return an error message if validation fails
  }
  // ✅ Check if any element is negative:
  // If either of the numbers is negative, return "Invalid Input"
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  }
  // ✅ Check if both elements are equal:
  // If both numbers are the same, return "equal"
  if (arr[0] === arr[1]) {
    return "equal";
  }
  // ✅ Sort the array in descending order:
  // Use the `.sort()` method with a custom comparator:
  // - (b - a) sorts the array in descending order (larger to smaller)
  return arr.sort((a, b) => b - a);
}
// ✅ Test cases to verify the function:
console.log(sortMaker([2, 3])); // Output: [3, 2] (descending order)
console.log(sortMaker([3, 2])); // Output: [3, 2]
console.log(sortMaker([4, 2])); // Output: [4, 2]
console.log(sortMaker([4, 4])); // Output: "equal" (both values are the same)
console.log(sortMaker([1, 2])); // Output: [2, 1]
console.log(sortMaker([2, 1])); // Output: [2, 1]
console.log(sortMaker([4, -2])); // Output: "Invalid Input" (contains a negative number)
console.log(sortMaker(["a", 2])); // Output: "Invalid Input" (contains a non-number value)
console.log(sortMaker([0, 5])); // Output: [5, 0] (0 is allowed but sorted correctly)
console.log(sortMaker([5])); // Output: "Invalid Input" (not exactly 2 elements)
console.log(sortMaker(5)); // Output: "Invalid Input" (not an array)

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

// Function to find and format the address from an object
function findAddress(obj) {
  // Check if 'street' exists in the object. If not, assign "__".
  let street = obj.street !== undefined ? obj.street : "__";

  // Check if 'house' exists in the object. If not, assign "__".
  let house = obj.house !== undefined ? obj.house : "__";

  // Check if 'society' exists in the object (correcting the case from 'Society').
  // If not, assign "__".
  let society = obj.society !== undefined ? obj.society : "__";

  // Return the address in a formatted string: "street, house, society".
  return `${street}, ${house}, ${society}`;
}

// Example 1: All fields are provided in the correct case.
console.log(
  findAddress({ street: 10, house: "15A", society: "Earth Perfect" })
);
// Output: "10, 15A, Earth Perfect"

// Example 2: Missing 'house' field. It defaults to "__".
console.log(findAddress({ street: 10, society: "Earth Perfect" }));
// Output: "10, __, Earth Perfect"

// Example 3: Only 'street' is provided. Other fields default to "__".
console.log(findAddress({ street: 10 }));
// Output: "10, __, __"

// --------------------------------------------------------------------

function findAddress(obj) {
  let street = obj.street !== undefined ? obj.street : "__";
  let house = obj.house !== undefined ? obj.house : "__";
  let society = obj.Society !== undefined ? obj.Society : "__";

  return `${street}, ${house}, ${society}`;
}
console.log(
  findAddress({ street: 10, house: "15A", Society: "Earth Perfect" })
); // Output: 10, 15A, Earth Perfect
console.log(findAddress({ street: 10, society: "Earth Perfect" })); // Output: 10, __, Earth Perfect
console.log(findAddress({ street: 10 })); // Output: 10, __, __

//  -------------------------- Bonus Problem solve ----------------------
function findAddressBonus(obj) {
  let street = obj.street !== undefined ? obj.street : "__";
  let house = obj.house !== undefined ? obj.house : "__";
  let society = obj.Society !== undefined ? obj.Society : "__";

  return `${street}, ${house}, ${society}`.replace(/(__+)/g, "__");
}

console.log(
  findAddressBonus({ street: 10, house: "15A", Society: "Earth Perfect" })
); // Output: 10, 15A, Earth Perfect
console.log(findAddressBonus({ street: 10, society: "Earth Perfect" })); // Output: 10, __, Earth Perfect
console.log(findAddressBonus({ street: 10 })); // Output: 10, __, __

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

// ----------------------------------------------------------------

// Function to check if the total amount of money in the "notes" array
// is enough to pay for the "chipsPrice"
function canPay(notes, chipsPrice) {
  // Step 1: Check if the input array is empty
  // If the array is empty, there is no money to pay, so return false
  if (notes.length === 0) {
    return false;
  }

  // Step 2: Calculate the total amount of money in the notes array
  // Use the reduce() method to sum all the elements in the array
  const totalMoney = notes.reduce((acc, curr) => acc + curr, 0);

  // Step 3: Compare the total money with the chips price
  // If the total amount is greater than or equal to the price, return true
  // Otherwise, return false
  return totalMoney >= chipsPrice;
}

// Test cases to verify the function's correctness

// Case 1: Total money (1 + 2 + 5 = 8) is less than chips price (10)
// Expected output: false
console.log(canPay([1, 2, 5], 10));

// Case 2: Total money (1 + 5 + 5 = 11) is greater than chips price (10)
// Expected output: true
console.log(canPay([1, 5, 5], 10));

// Case 3: Empty array means no money is available
// Expected output: false
console.log(canPay([], 10));

// Case 4: Total money (10) is exactly equal to chips price (10)
// Expected output: true
console.log(canPay([10], 10));

// Case 5: Total money (5 + (-5) = 0) is less than chips price (5)
// Expected output: false
console.log(canPay([5, -5], 5));
