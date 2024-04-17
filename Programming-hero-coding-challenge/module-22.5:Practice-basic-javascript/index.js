
//প্রব্লেম সলভিং চেকলিস্ট/সেলফ এসেসমেন্ট : 
/*
১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 
*/


function feetToInch(feet){
   const inch = feet * 12;
   return inch;
}
const dataFeet = 10;
const dataFeets = feetToInch(dataFeet);
console.log(dataFeets);



///////////////////////////////////////////

/*
২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 
.
*/
function centimeterToMeter(centimeters) {
   const meter = centimeters / 100;
   return meter;
}
const centimeter = 1000;
const centimeterToMeters = centimeterToMeter(centimeter);
console.log(centimeterToMeters);

////////////////////////////////////////////
/*
৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 
এইবার ভালো করে খেয়াল করো। 
প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 

Write another function whose name The function named paperRequirements will have three parameters as parameters of this function. The first parameter will be how many copies of the first book you want to print. The second parameter will be how many copies of the second book you want to print. And the third parameter will be how many copies of the third book you want to print. That is, how many copies of a book will be printed will be taken as a parameter.
Pay attention this time.
It will take 100 pages to print the first book
200 pages will be required to print the second book
300 pages will be required to print the third book
Now your job is to write a function called paperRequirements so that Calling that function will tell how many copies of a book will be required as a parameter. And the function will calculate and tell you how many pages of paper you will need in total.
will return the number as the answer. in javascript
.
*/


function paperRequirements(numCopiesBook1, numCopiesBook2, numCopiesBook3) {
  const pagesPerBook = [100, 200, 300];
  let totalPaperRequired = 0;

  for (let i = 0; i < pagesPerBook.length; i++) {
    totalPaperRequired += pagesPerBook[i] * arguments[i];
  }

  return totalPaperRequired;
}

const book1Copies = 3;
const book2Copies = 2;
const book3Copies = 4;

const totalPaper = paperRequirements(book1Copies, book2Copies, book3Copies);
console.log("Total paper required:", totalPaper);


/*
Sure! Let's go through the paperRequirements function step by step:

The function paperRequirements is defined with three parameters: numCopiesBook1, numCopiesBook2, and numCopiesBook3. These parameters represent the number of copies you want to print for each book.

The variable pagesPerBook is an array that holds the number of pages required for each book. The first book requires 100 pages, the second book requires 200 pages, and the third book requires 300 pages.

The variable totalPaperRequired is initialized to 0. This variable will keep track of the total number of pages required.

The for loop iterates over the pagesPerBook array. In each iteration, it multiplies the number of copies for a particular book (accessed through arguments[i]) with the number of pages per book (pagesPerBook[i]), and adds the result to totalPaperRequired.

After the loop finishes, the totalPaperRequired variable holds the total number of pages needed to print all the requested copies of each book.

Finally, the function returns the value of totalPaperRequired, which represents the total number of pages of paper required.

In the example usage provided, the function is called with book1Copies set to 3, book2Copies set to 2, and book3Copies set to 4. The function calculates the total paper required based on these values and outputs it using console.log.

*/





////////////////////////////////////////


/*
৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

Write a function. The name of this function will be bestFriend then the function will take an array as input parameter. That array will contain the names of all your friends. Now your task is to return the name of the friend whose name is the largest. In this case you should return the name ie the friend's name (string).
.
*/

function bestFriend(friends) {
  let largestName = "";
  
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length > largestName.length) {
      largestName = friends[i];
    }
  }
  
  return largestName;
}

const friendsList = ["Alice", "Bob", "Charlie", "David", "Eve"];
const bestFriendName = bestFriend(friendsList);
console.log("Best Friend:", bestFriendName);


/*
Certainly! Let's break down the bestFriend function step by step:

The bestFriend function is defined with one parameter, friends, which represents an array containing the names of your friends.

The variable largestName is initialized as an empty string. This variable will keep track of the friend's name with the longest length.

The for loop iterates over each element in the friends array using the index variable i.

Inside the loop, there is an if statement that compares the length of the current friend's name, friends[i].length, with the length of the current largestName, largestName.length. If the length of the current friend's name is greater than the length of the current largestName, it means we have found a new friend with a longer name. In that case, the largestName variable is updated to store the name of the current friend.

After iterating through all the friends in the friends array, the function has determined the friend with the longest name. The value of largestName represents the name of this friend.

Finally, the function returns the value of largestName, which is the name of the friend with the longest name.

In the example usage provided, the function is called with the friendsList array, which contains the names of your friends. The function iterates through the array, compares the length of each friend's name, and updates the largestName variable accordingly. The resulting friend's name with the longest length is then outputted to the console using console.log.
*/










/////////////////////////////////////////

/*
৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

An array will contain many numbers. Your task is to check the numbers one by one. and if the numbers are positive numbers. That is, zero or greater than zero, then put them in an array. And if the number is negative. Then the loop will stop. and as many positive numbers are found until the loop is closed. Will return them.
*/

function getPositiveNumbers(numbers) {
  const positiveNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      positiveNumbers.push(numbers[i]);
    } else {
      break;
    }
  }

  return positiveNumbers;
}
const numbersArray = [3, 7, 1, -2, 4, 5];
const positiveNums = getPositiveNumbers(numbersArray);
console.log("Positive Numbers:", positiveNums);

/*
Let's break down the getPositiveNumbers function step by step:

The getPositiveNumbers function is defined with one parameter, numbers, which represents an array containing multiple numbers.

Inside the function, a new array called positiveNumbers is initialized. This array will store all the positive numbers found during the iteration.

The for loop is used to iterate over each element in the numbers array. The loop runs from i = 0 to i < numbers.length, meaning it goes through each element of the array.

Inside the loop, there is an if statement that checks if the current number, numbers[i], is greater than or equal to zero. This condition determines if the number is positive or zero.

If the current number is positive or zero, it is considered a positive number, and it is added to the positiveNumbers array using the push method. This way, positive numbers found during the iteration are accumulated in the positiveNumbers array.

If the current number is negative, the break statement is executed, which terminates the loop immediately. This means that no further numbers will be checked, and the function will return the positiveNumbers array as it is.

Once the loop finishes or encounters a negative number, the function will have collected all the positive numbers found until that point in the positiveNumbers array.

Finally, the function returns the positiveNumbers array, which contains all the positive numbers discovered during the iteration.

In the provided example usage, the getPositiveNumbers function is called with the numbersArray array. The function iterates through the array, adds positive numbers to the positiveNums array, and stops the loop when a negative number is encountered. The resulting positive numbers are then outputted to the console using console.log.

*/



//////////////////////////////////////////
/*
1. feet to inch 
function name (feetToInch) dibo

2. centimeter to meter
function name (centimeterToMeter) dibo

3. count paper
// book1 ---> 100
// book2 ---> 200
// book3 ---> 300
function name (paperRequirements) dibo

4. ['sajid', 'mamun', 'kamal', 'jubayer bin rashed', 'Chinku']
function name (bestFriend) dibo
(jei bane ta shobchye boro sheta return korbo)

5. onlyPositive
   [45, 87, 96, 11, 63, -56, 71, 28];
*/
