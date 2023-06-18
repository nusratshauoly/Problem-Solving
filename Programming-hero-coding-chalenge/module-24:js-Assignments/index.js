/*
First Problem 

* funtion name (mindGame) dibo

//input hishebe 1 ta number nibo and oi number k 
1.3 diye * korbo,
2.jei result ashbe oitar shathe 10 add korbo,
3.total result take 2 diye / korbo
4.total j result ashbe oita theke 5 (-) korbo.
5. then shudhu jei number ta ashbe oitai shudhu return korbo (extra kono kichu likhbo na)


Problem 1: Let’s play a mind game
তোমাকে একটা function দেওয়া হবে called mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে।")
এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে
Sample Input & Output
Input: 5
Output: 7.5
Input: 50
Output: 75
Input: 33
Output: 49.5


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

Certainly! Let's break down the mindGame function step by step:

The mindGame function is defined with one parameter, number, which represents a positive number.

Inside the function, a variable called result is declared. This variable will store the intermediate and final result of the calculations.

The input number is multiplied by 3 using the * operator.

The result of the multiplication is then increased by 10 using the + operator.

The updated result is divided by 2 using the / operator.

Finally, 5 is subtracted from the division result using the - operator.

The resulting value is stored in the result variable.

The function returns the value of result as the output.

In the provided example usage, the mindGame function is called with different input numbers (5, 50, 33) as arguments. For each call, the function performs the calculations described above and returns the resulting value. These values are then printed to the console using console.log.

For example, when the input number is 5, the function performs the following calculations:

result = ((5 * 3) + 10) / 2 - 5
= (15 + 10) / 2 - 5
= 25 / 2 - 5
= 12.5 - 5
= 7.5

Therefore, the output for the input number 5 is 7.5. Similarly, the function calculates the outputs for the other input numbers provided.
////////////////////////////////////////

/*
Second Problem

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


/*
Certainly! Let's break down the evenOdd function step by step:

The evenOdd function is defined with one parameter, str, which represents a string.

Inside the function, the length of the input string str is calculated using the length property. This gives us the total number of characters in the string.

The length of the string is then divided by 2 using the modulus operator (%). The modulus operator returns the remainder of the division.

We check if the remainder is 0 by comparing the result of the division with 0 using the strict equality operator (===). If the remainder is 0, it means the length is even.

If the remainder is 0, the function returns the string 'even', indicating that the total number of characters in the input string is even.

If the remainder is not 0, it means the length is odd.

If the remainder is not 0, the function returns the string 'odd', indicating that the total number of characters in the input string is odd.

In the example usage provided, the evenOdd function is called with different input strings. For each call, the function calculates the length of the string and determines whether it is even or odd based on the remainder of the division by 2. The resulting output ('even' or 'odd') is then printed to the console using console.log.

For example, when the input string is 'Phero', the length of the string is 5. Since 5 is an odd number (not divisible evenly by 2), the function returns the string 'odd'. Similarly, the function determines the outputs for the other input strings provided.

*/


//////////////////////////////////////////////

/*
Third Problem

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
Certainly! Let's break down the isLGSeven function step by step:

The isLGSeven function is defined with one parameter, number, which represents a number.

Inside the function, the difference between the input number and 7 is calculated by subtracting 7 from the input number and storing the result in the difference variable.

The function then checks if the difference is less than 7 using an if statement.

If the difference is indeed less than 7, it means that the subtraction result is smaller than 7. In this case, the function returns the value of the difference.

If the difference is not less than 7, meaning it is greater than or equal to 7, the else block is executed.

In the else block, the function returns the result of doubling the input number by multiplying it by 2.

In the provided example usage, the isLGSeven function is called with the number 6. Here's how the execution proceeds:

The function calculates the difference between 6 and 7, which results in -1.

Since -1 is less than 7, the if condition is true.

The function returns the value of -1.

The returned value of -1 is then printed to the console using console.log.

So, in the example usage, the output for the input number 6 is -1, which is the difference between 6 and 7 since it is smaller than 7.

*/



////////////////////////////////////////////

/*
Fourth Problem

*function name (findingBadData) dibo

// ----> age er numbers ache erokom ekta array input hishebe nibo [1, 45 13]{valid data} and [12, -2, 0, -15, -11] {2 unvalid / minus data}
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

/*
In the findingBadData function:

The function takes an array arr as input, which contains a series of numbers.

A variable called badDataCount is declared and initialized to 0. This variable will keep track of the count of "bad data" (negative numbers) in the array.

The function then iterates over each element in the array using a for loop. The loop variable i represents the index of the current element.

Within each iteration, the function checks if the current element arr[i] is less than 0, indicating that it is a "bad data" (negative number). If it is, the badDataCount is incremented by 1.

After iterating through all the elements in the array, the function returns the value of badDataCount, representing the count of "bad data" (negative numbers) in the array.

In the provided example usage, the findingBadData function is called with different input arrays. The function counts the number of negative numbers (bad data) in each array and returns the count. These counts are then printed to the console using console.log.
*/

/*

Explain:  

Certainly! Let's break down the findingBadData function step by step:

The findingBadData function is defined with one parameter, arr, which represents an array of numbers.

Inside the function, a variable called badDataCount is declared and initialized to 0. This variable will keep track of the count of "bad data" (negative numbers) in the array.

The function then iterates over each element in the array using a for loop. The loop variable i represents the index of the current element.

Within each iteration, the function checks if the current element arr[i] is less than 0, which indicates that it is a "bad data" (negative number). If the condition is true, the code inside the if block is executed.

Inside the if block, the badDataCount variable is incremented by 1. This counts the occurrence of a "bad data" in the array.

After iterating through all the elements in the array, the loop ends, and the function exits the loop.

The function returns the final value of the badDataCount variable, which represents the count of "bad data" (negative numbers) found in the array.

In the provided example usage, the findingBadData function is called with different input arrays. Let's take one example:

When the input array is [2, -5, -7, -13]:
The function iterates through each element in the array.
It encounters the number 2, which is not a negative number, so it does not increment badDataCount.
It encounters the number -5, which is a negative number, so it increments badDataCount by 1.
It encounters the number -7, which is a negative number, so it increments badDataCount by 1.
It encounters the number -13, which is a negative number, so it increments badDataCount by 1.
After iterating through all the elements, the badDataCount is 3.
The function returns 3 as the output.

The same process applies to the other example input arrays, where the function counts the occurrences of negative numbers (bad data) and returns the count as the output.

*/




///////////////////////////////////////////////

/*
Fifth Problem

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
In the gemsToDiamond function:

The function takes three parameters: gems1, gems2, and gems3, representing the number of gems for each friend.

Constants power1, power2, and power3 are defined with the respective power of gems for each friend.

The total number of diamonds is calculated by multiplying the number of gems for each friend by their respective gem power and summing them up.

The function then checks if the totalDiamonds is greater than 1000 using an if statement.

If the totalDiamonds is indeed greater than 1000, it means you have more than 1000 diamonds. In this case, the function returns the value of totalDiamonds minus 2000, as instructed in the task.

If the totalDiamonds is not greater than 1000, meaning it is less than or equal to 1000, the else block is executed.

In the else block, the function simply returns the value of totalDiamonds without any modifications.

In the provided example usage, the gemsToDiamond function is called with different input values representing the number of gems for each friend. The function calculates the total number of diamonds based on the gem powers and the number of gems for each friend. If the total number of diamonds is over 1000, it returns the remaining diamonds after subtracting 2000. The returned values are then printed to the console using console.log.
*/


/*

explain:
Certainly! Let's break down the gemsToDiamond function step by step:

The gemsToDiamond function is defined with three parameters: gems1, gems2, and gems3, representing the number of gems for each friend.

Inside the function, three constants power1, power2, and power3 are declared and assigned the respective power of gems for each friend: 21, 32, and 43.

The function calculates the total number of diamonds by multiplying the number of gems for each friend by their corresponding gem power, and then summing up the results.

Next, the function checks if the totalDiamonds is greater than 1000 using an if statement.

If the totalDiamonds is indeed greater than 1000, it means that the total number of diamonds exceeds 1000. In this case, the code inside the if block is executed.

Inside the if block, the function returns the value of totalDiamonds minus 2000. This is done to calculate the remaining diamonds after subtracting 2000 from the total, as per the task requirements.

If the totalDiamonds is not greater than 1000, meaning it is less than or equal to 1000, the else block is executed.

In the else block, the function simply returns the value of totalDiamonds without any modifications.

In the provided example usage, the gemsToDiamond function is called with different input values representing the number of gems for each friend.

For example, when the input is gemsToDiamond(1, 1, 1), the function calculates the total number of diamonds by multiplying 1 gem for each friend with their respective powers: 1 * 21 + 1 * 32 + 1 * 43 = 96. Since 96 is not greater than 1000, the function returns 96 as the output.

Similarly, for the other example inputs, the function performs the calculations based on the gem powers and the number of gems for each friend, and returns the total number of diamonds or the remaining diamonds if it exceeds 1000.

The returned values are then printed to the console using console.log.

*/

// Module - 24-2: Assignment bonus and how to submit:

/* Bonus marks

----> let and const use korte hobe kono var use kora jabena
----> parameter and variable er name gulo validate name / meaningful name likhte hobe
----> function er ki kaj kortesi etar choto kore ekta description english e likhte hobe.(1/2/3 line dscripton).
----> function er jei parameter gulo thakbe
shegulote number deya lagbe and jodi number bade onno kono string dei tahole if else er moto likhe dite hobe 'please give e number' or 'input should be a number'.
----> even and odd problem e string parameter hishebe nibo jodi string bade onno kono number parameter hishebe nei tahole if else diye dekhabo 'ekhane string parameter dao'
----> third problem e string dile error message dekhabo if else diye
----> fourth problem e array chara onno input dile error message dekhabe 
-----> fifth problem e 3 ta parameter diechi kina and 3 parameer e number kina check korbo, kono 1 ta jodi number chara thake tahole ei if else diye error message dekhabo.
-----> 
..........................................................................................

-----> how to submit: assignment korar jonno kono private repository lagbe na, kono github link or live website link submit korte hobena
------> start assignment e jeye vs code er 1 file ei 5 ta problem solve korbo and description gulo likhbo, then all select kore copy paste korbo start assignment er oikhane then submit kore dibo.
------>  