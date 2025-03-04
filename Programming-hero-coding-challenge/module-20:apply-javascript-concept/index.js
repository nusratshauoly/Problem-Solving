//প্রাকটিস চ্যালেঞ্জ-৩ টা: 

/*
12. write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes. / convert minute to second.
৩. এমন একটা ফ্যাংশনা লিখো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে। আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে। 
*/

function hourToMinutes(hour) {
  let minutes = hour * 60;
  return minutes;

}
const hours = 5;
const minutes = hourToMinutes(hours);
console.log(`${hours} is equal to ${minutes} minutes`);


/* 13. write a function findLeapYear() that will take the array [2023, 2024, 2025, 2028, 2030] as the input parameter and will check if each year is a leap year. If a year is a leap year 
insert that year in a new array, return the new array and print the result. (odd number system er moto)
১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।
*/


/*
// explanation

In this code, the findLeapYear() function takes an array of years as input. It initializes an empty array called leapYears to store the leap years.

The function then iterates over each year in the input array using a for loop. For each year, it checks if the year is divisible by 4 but not divisible by 100 (except if it's divisible by 400), which are the conditions for a leap year. If a year satisfies these conditions, it is added to the leapYears array using the push() method.

Finally, the function returns the leapYears array.

In the example usage, we pass the array [2023, 2024, 2025, 2028, 2030] to the findLeapYear() function. The function identifies that the years 2024 and 2028 are leap years and returns a new array [2024, 2028]. We log this array to the console using console.log().

*/

function findLeapYear(years) {
  const leapYears = [];

  for (let i = 0; i < years.length; i++){
    const year = years[i];

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapYears.push(year);
    }
  }
  return leapYears;
}
let years = [2023, 2024, 2025, 2028, 2030];
let leapYears = findLeapYear(years);
console.log('leap years:', leapYears);


// ----------------- using forEach ------------------
function findLeapYear(years) {
  let leapYears = [];
  years.forEach(year => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapYears.push(year);
    }
  });
  return leapYears;
}
let years = [2023, 2024, 2025, 2028, 2030];
let leapYears = findLeapYear(years);
console.log('leap years:', leapYears);



/* 14. Write a function findOddSum() that will take the array [5, 7, 8, 45, 30] as the input parameter and will return the sum of the odd numbers.
২. তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।
*/


/*

// explanation:
In this code, the findOddSum() function takes an array of numbers as input. It initializes a variable sum to 0 to keep track of the sum of odd numbers.

The function then iterates over each number in the input array using a for loop. For each number, it checks if the number is odd by checking if the remainder of dividing the number by 2 is not equal to 0. If the number is odd, it adds it to the sum variable using the += operator.

Finally, the function returns the sum variable, which represents the sum of the odd numbers in the array.

In the example usage, we pass the array [5, 7, 8, 45, 30] to the findOddSum() function. The function calculates the sum of the odd numbers (5, 7, and 45) in the array, which results in 57. We log this sum to the console using console.log().
*/

function findOddSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (number % 2 !== 0) {
      sum += number;
    }
  }

  return sum;
}

// Example usage
const numbers = [5, 7, 8, 45, 30];
const oddSum = findOddSum(numbers);
console.log("Sum of odd numbers:", oddSum);



/*
4. Inch to Feet
The standard height of a volleyball player is 7 feet. Jim wants to join the vollyball team, so he decided to measure his height to see if he meets the standard. Calculate his height in feet.
To convert inch to feet: feet = inch / 12
Input: The input line has the height in inch : 84
Output: Print the height in feet : 7
*/

// solving in normal way
const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);
//
const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log('dada feet', dadaFeet);
//
const dadiInches = 60;
const dadiFeet = dadiInches / 12;
console.log('dadi feet', dadiFeet);

// using function
function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);


const dadiInches = 60;
const dadiFeet = inchToFeet(dadiInches);
console.log('dadi feet', dadiFeet);


/* 5. Miles to Km
John is a web developer, and he cycles to work. He knows the distance between his house and his office in miles. John wants to measure the distance in kilometers. Calculate the distance in Km.
To convert miles to Km:  km = miles * 1.60934

Input: The Input line has the distance in miles : 2

Output: Print the distance in km:  3.21868
*/

function milesToKilometer(miles){
   const kilometer = miles * 1.60934;
   return kilometer;
}
const miles = 2;
const kilometer = milesToKilometer(miles);
console.log('the distance is', kilometer);

///////////////////////////////////

/*
6. Even and Odd

Peter's school teacher asked him to write a program that would return true if a number is even and false if a number is odd. Help Peter write the program.

Input: The first and second input lines contain the numbers. : 98, 117

Output: Print true if the number is an even number and false if the number is an odd number: true, false
*/

function isEven(number){
    const remainder = number % 2;
    //console.log(remainder);
    if(remainder === 0){
       //console.log('number is even');
       return true;
    }
    else{
       //console.log('number is odd');
       return false;
    }
}
const myNumberIsEven = isEven(48);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);
isEven(303);

//////////////////////////////////

/*
7. Kono 1 ta year leap year kina sheta ber kora
***Kono year leap year hobe kina oita bujhbo jodi year ta 4 diye vag jay.
*/
function isLeapYear(year){
   const leapYear = year % 4;
   if(leapYear === 0){
      //console.log('Your year is leap year', year);
      return true;
    }
    else{
      return false;
    }
}
const isMyYearLeapYear = isLeapYear(1933);
console.log('my year:', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year:', isHerYearLeapYear);

// another way

//  jodi wkhane ans true hoy tahole r porer line gulote jabena or jodi false hoy tahole (if-else) condition evebeo likha jay

function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
       //console.log('Your year is leap year', year);
       return true;
     }
    return false;
}

const isMyYearLeapYear = isLeapYear(1933);
console.log('my year:', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year:', isHerYearLeapYear);


////////////////////////////////////////////////////////

/*
8. Write  a function findOddSum() that will take the array [5,7,8,10,45,30] as the input prameter and will return the sum of the odd numbers.
*/


// sum of all numbers
function findOfSum(numbers){
    // 2.(i) condition er bahire sum er kaj korbo (jokhon konokichu add korbo tokhon er primary value hobe 0 cause ekhono add korinai)
    let sum = 0; // sum jodi for ondition er vitore declare kori then each time new line e add korte hobe 0 er shathe ager addition er value hariye jabe jodi kothao store kore na rakhi that' why sum for loop er bahire declare korbo.
  //console.log(numbers);
  //1. array er each element first e ber korte hobe
   for(let i = 0; i < numbers.length; i++){
    // array er index gulo ber korar jonno
      const index = i;
    // index ber korle element o ber korte parbo (third bracket j index er element ta pete chai shetar man boshabo)
      const element = numbers[index];
    //2.(ii) sum er operation ekhane korbo  
      sum = sum + element; 
      console.log(index, element, sum);
}
// 2.(iii) then sum return korbo loop er bahire
      return sum;

}
const myNumbers = [5, 7, 8, 10, 45, 30];
findOfSum(myNumbers);


// without comments
function findOfSum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element; 
        console.log(index, element, sum);
  }
  return sum;
}
const myNumbers = [5, 7, 8, 10, 45, 30];
console.log(findOfSum(myNumbers));


//////////////////////////////

// find the sum of odd numbers

/*

In this function, we initialize the variable sum to 0. Then, we iterate over each element of the array using a for loop. Inside the loop, we use the modulo operator (%) to check if the current element is odd (array[i] % 2 !== 0). If it is, we add it to the sum variable. Finally, we return the sum after looping through all the elements in the array.

In the example usage, we create an array [5, 7, 8, 10, 45, 30], and then call the findOddSum() function with this array as the parameter. The resulting sum of the odd numbers is stored in the oddSum variable, which we then log to the console.


*/
function findOddSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
    }
  }
  return sum;
}

// Example usage:
const array = [5, 7, 8, 10, 45, 30];
const oddSum = findOddSum(array);
console.log(oddSum); // Output: 57 (5 + 7 + 45)



/*
9. kono 1 ta array te jeshokol bijor(odd) number ase shegulo ber korbo and add korbo
*/
function getOddNumbersOfAnArray(numbers){
    // 4. loop er moddhe theke jei odd numbers gulo pabo shegulo shob ekta array te rakhte hobe and eishob store value gulo normally loop er bahire declare korte hoy
    const oddNumbers = [];

    for(let i = 0; i < numbers.length; i++){
        //console.log(i);
        // 1.array er value(i) gulo array er position index e rakhbo
        const index = i;
        // 2. numbers nam er array theke oi index er value ta pawar niyom holo third bracket er moddhe index er value ta pathaye dibo[index]
        const element = numbers[index];
        // 3. number gulor moddhe jegula odd shegula select korbo 2 diye divide korbo and remainder 0 hote parbena or 0 er beshi hobe
        if(element % 2 !== 0){
            console.log(index, element);
            // 5. jokhon e notun ekta odd value pabo sheta array er moddhe boshaye dibo
            oddNumbers.push(element);
        }
    }
    // 6. array er moddhe shobgulo odd numbers pawar jonno
    return oddNumbers;
}
const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
// 6. 8 no. problem theke sum value anbo (eta alada vabe pore kore dekhte hobe)
const oddNumberSum = findOddSum(oddNumbers);
console.log('odd number sum', oddNumberSum);

//////////// full code //////////////

function getOddNumbersOfAnArray(numbers) {
  const oddNumbers = [];

  for (let i = 0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}
const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = sumOfAnArray(oddNumbers);
console.log('odd number sum', oddNumberSum);


//////////////////////////////////////////

//10. Calculate Factorial of a number using for loop:
// adding 1 to 7 numbers: 1 + 2 + 3 + 4 + 5 + 6 + 7
let sum = 0;
for(let i = 1; i <= 7; i++){
    sum = sum + i;
    console.log(i, sum);
}
//  using function
function sumOfNumbers(number){
    // addition er shomoy initial value always 0 rakhbo.
    let sum = 0;
    for(let i = 1; i <= number; i++){
       sum = sum + i;
       console.log(i, sum);
    }
    return sum;
}
sumOfNumbers(7);
// multiplication of numbers

function multiplicationOfNumbers(number){
    // multiplication er shomoy initial value always 1 rakhbo
   let result = 1;
   for(let i = 1; i <= number; i++){
      result = result * i;
    }
    return result;
}
const result = multiplicationOfNumbers(7);
console.log(result);

///////factorial: A factorial is a function that multiplies a number by every number below it till 1.

//3! = 3 * 2 * 1 / 3 * 2! / 3 * (3 - 1)!.

// factorial formula: n! = n * (n - 1)!.

function factorial(number){
   let factorial = 1;
   for(let i = number; i >= 1; i--){
      factorial = factorial * i;
      console.log(i, factorial);
   }
   return factorial;
}
const number = 5;
const fact = factorial(number);
console.log('factorial of:',number, fact);

//////////////////////////////////////////////////////////////////////////////////////////

//////   using recursion//////////////////

/*Certainly! Here's a concise way to calculate the factorial of a number using recursion in JavaScript: */

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  
  return number * factorial(number - 1);
}

// Example usage
const number = 5;
const factorialOfNumber = factorial(number);
console.log(`The factorial of ${number} is ${factorialOfNumber}`);

/*
In this code, the factorial function takes a number as input.It checks for the base cases where the number is 0 or 1, and in both cases, it returns 1. This is because the factorial of 0 or 1 is always 1.

If the input number is greater than 1, the function recursively calls itself with the argument number - 1 and multiplies it by the current number. The recursion continues until it reaches the base case, at which point the function starts unwinding and returning the factorial value back up the call stack.

In the example usage, we calculate the factorial of the number 5 and log the result to the console. You can replace the value of number with any positive integer to calculate its factorial using this function.

*/


/////////////////////////////////////////////////////////////////////////////////////////

// 11. Calculate Factorial of a number using while loop:

function factorial(number) {
  let factorial = 1;
  let currentNumber = number;
  while (currentNumber > 1) {
    factorial = factorial * currentNumber;
    currentNumber--;
    console.log(factorial);
  }
  return factorial;
}
let number = 5;
let factorialOfNumber = factorial(number);
console.log(`the factorial of ${number} is ${factorialOfNumber}`);


// //////////////////////////////////////////////////////////////////////////////////////////////factorial while solution in chatgpt


function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  let result = 1;
  let currentNumber = number;

  while (currentNumber > 1) {
    result *= currentNumber;
    currentNumber--;
  }

  return result;
}
// Example usage
const number = 5;
const factorialOfNumber = factorial(number);
console.log(`The factorial of ${number} is ${factorialOfNumber}`);
/*
In this code, we define a function called factorial that takes a number as input. Inside the function, we first handle the base cases where the number is 0 or 1, in which case the factorial is always 1.

If the input number is greater than 1, we initialize result to 1 and currentNumber to the input number. Then we enter a while loop that multiplies result by currentNumber and decrements currentNumber by 1 in each iteration until currentNumber is no longer greater than 1.

Finally, we return the result, which will be the factorial of the input number.

In the example usage, we calculate the factorial of the number 5 and log the result to the console. You can replace the value of number with any positive integer to calculate its factorial using this function.
*/


// factorial while in a reverse way
function reverseFactorial(number) {
    let result = number;
    let i = 2;
    while (result > 1) {
        if (result % i !== 0) {
            return "No reverse factorial found";
        }
        result /= i;
        i++;
    }
    return i - 1;
}

const number = 120;
const output = reverseFactorial(number);
console.log(output);
  // Output: 5

///////////////////////////////

/*




