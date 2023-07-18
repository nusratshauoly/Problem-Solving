/*
1. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 
*/


function minInArray(numbers) {
    let lowest = numbers[0];

    for (let i = 0; i < numbers.length; i++){
        
        const element = numbers[i];
        
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}
const heights = [167, 190, 120, 165, 137];
const shortest = minInArray(heights)
console.log('lowest number is: ', shortest);


/////////////////////////////////////////////////////////

/*
2. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে। 
*/

function minNumber(num1, num2, num3) {
    const minimum = Math.min(num1, num2, num3);
    return minimum;
}
const minimumNumber = minNumber(34, 64, 9);
console.log(minimumNumber);


/////////////////////////////////////////////////////////

// 3. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 

// Write a function. The function will take an array as input. That array will contain many numbers. Your task will be to input as many numbers as there are in the array. Find the average of those numbers. Then return that average function. think a little try to understand try it see if you can

function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
console.log(average([1, 2, 3, 4, 5]));


/////////////////////////////////////////////////////////

// 4. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 
// Write a function. which will take the length and height of a rectangle as input parameters. Then return the area of that rectangle as the result.

function rectangle(length, height) {
    let area = length * height;
    return area;
}
let rectangleValues = rectangle(8, 6);
console.log('area of triangle', ractangleValues);


/////////////////////////////////////////////////////////

//5. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 
//An array contains many numbers. Write a program to find the second largest number from those numbers. Search Google if necessary. Then look at the search results and try to understand.

function secondLargest(arr) {
    let max1st = arr[0];
    let max2nd = 0;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max1st) {
            max2nd = max1st;
            max1st = arr[i];
        }
        else if (arr[i] > max2nd && arr[i] != max1st) {
            max2nd = arr[i];
        }
    }
    return max2nd;
}
console.log(secondLargest([100,2,4,54,27,98,99]));


// module regular video lecture problem
////////////////////////////////////////////////////////

/*
6. write a function called foo() which prints "foo" and a function called bar() which prints "bar". Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output
*/

function bar(){
    console.log("bar");
}
function foo(){
    console.log("foo");
    bar();
}
foo();


///////////////////////////////

/* 1. Jim is a meritorious student. He secures first place in his class all the time. This year, Dela has joinedhis class. 
She was also a topper at her previous school. On the day of result publication, the teacher comes into the class with a delicious cake and says that "Jim & Dela, whoever is the topper, will get this tasty cake." Can you find out who will get this cake? 

Input: 
The input line has two values, m(The marks Jim has got)and n (The marks Dela has got).

Output:
Print the name of thr topper.

Sample Input -1: 84 75    |   Sample Output -1: Jim

Sample Input -1: 69 97    |   Sample Output -1: Dela
*/
const jim = 84;
const dela = 75;
if(jim > dela){
    console.log('jim will get the cake');
}
else{
    console.log('dela you will get the cake');
}

/*
2. This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?

Input: The input line has three values, x(The marks Jim has got), y(The marks Dela has got) and z(THe marks Chinku has got).

Output: Print the name of the topper.

Sample Input- 1: 84 99 77     |   Sample Output - Dela

Sample Input - 2: 69 97 99    |   Sample Output-2: Chinku
*/
//ist input
const jim = 84;
const dela = 75;
const chinku = 77;

// first approach
if(jim > dela && jim > chinku){
    console.log('jim will get the cake');
}
else if(dela > jim && dela > chinku){
    console.log('Dela will get the cake');
}
else{
    console.log('chinku will get the cake');
}

// 2nd input
const jim = 69;
const dela = 97;
const chinku = 99;

if(jim > dela && jim > chinku){
    console.log('jim will get the cake');
}
else if(dela > jim && dela > chinku){
    console.log('Dela will get the cake');
}
else{
    console.log('chinku will get the cake');
}

// 2. second approach

Math.max(84 99 77);
Math.min(69 97 99);
//Math.min(69 97 99);



///////


//**** */ Homework1: write a function that will take 3 numbers will return the max number.

function maxNumber(num1, num2, num3) {
    const maximum = Math.max(num1, num2, num3);
    return maximum;
}
const maximumNumber = maxNumber(84, 69, 99);
console.log(maximumNumber);


// using if - else
const num1 = 84;
const num2 = 75;
const num3 = 77;

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is greater`);
}
else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is greater`);
}
else {
    console.log(`${num3} is greater`);
}


//***** */ Homework2: write a function that will take 3 parameters and will return the min number.
// first time do it using if-else
//  second time do it using Math.min or Math.max

function minNumber(num1, num2, num3) {
    const minimum = Math.min(num1, num2, num3);
    return minimum;
}
const minimumNumber = minNumber(34, 64, 9);
console.log(minimumNumber);



// using if-else
const num1 = 84;
const num2 = 75;
const num3 = 77;

if (num1 < num2 && num1 < num3) {
    console.log(`${num1} is smaller`);
}
else if (num2 < num1 && num2 < num3) {
    console.log(`${num2} is smaller`);
}
else {
    console.log(`${num3} is smaller`);
}




//////////////////////////////////////////

// 1. who is the tallest?
/*
Tom and his friends are participating in the 'who is the tallest?" competition. As per the name, the peson with the highest height will be the winner. can you find who is the tallest among tom and all of his friends?

Input: The input line can have multiple integer numbers, xi(the height of ith friend in cm).
    
Output: Print the height of the tallest friend(cm).

Sample Input-1: 157, 134, 188  | Sample output: 188

Sample Input-2: 167, 190, 120, 165, 137  |  Sample Output-2: 190
*/


function maxInArray(numbers){
    //console.log('array inside the array', numbers);
 //   5.1: compare er jonno largest variable set kore (numbers er first value k largest dhorlam and array te rakhlam)
    let largest = numbers[0];
 // 1. array er value gulor length onujayi for loop chalabo (i e let disi karon i er man loop cholar shomoy each time change hobe)
    for(let i = 0; i < numbers.length; i++){
     // 2. then we will get the value index of the array (index e const disi karon value gulor index er positionfixed thakbe cause amra onno value reassign kortesi na)
       const index = i;
     // 3. numbers array te value er index gulo boshabo 
       const element = numbers[index];
     // 4. console.log korbo element k jate amra alada alada kore each element pai
       console.log(element);
     // 5.2 protita element jokhon ashbe tokhon largest er shathe element gulo compare korbo.(jodi present element er cheye largest er cheye boro hoy tahole largest e new element er man rakhbo r jodi na hoy tahole ignore kore dibo) then element gulo compare korbo like (167, 190)er compare kore 190 boro then abar 190 er shathe 120 compare, still 190 boro, then abar 190 er shathe 165 compare korbo, evabe shesh porjonto compare chalate thakbo
       if(element > largest){
         largest = element;
     } 
    }
 //    6. then largest number return korbo for loop er bahire jeye
    return largest;
 }
 // 00. value gulo declare korbo
 const heights = [167, 190, 120, 165, 137, 265];
 const tallest = maxInArray(heights);
 console.log('tallest person is:' tallest);
 
 // HomeWork1: write a function to get the lowest number in ana array.


// // /////full code  /////////
function maxInArray(numbers){
    
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
       const index = i;
       const element = numbers[index];
      
       if(element > largest){
         largest = element;
     } 
    }
    return largest;
 }
 const heights = [167, 190, 120, 165, 137];
 const tallest = maxInArray(heights);
 console.log('tallest person is:' tallest);
 

 //////



 //***** */ HomeWork1: wrie a function to get the lowest number in ana array.

function minInArray(numbers) {
    let lowest = numbers[0];

    for (let i = 0; i < numbers.length; i++){
        
        const element = numbers[i];
        
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}
const heights = [167, 190, 120, 165, 137];
const shortest = minInArray(heights)
console.log('shortest number is: ', shortest);



 ////////////////////////////

 // Module-22-8: Reverse a string and reverse words in a sentence:


// string reverse (character reverse)

// str[0], str[1] => evabe string er vitor element gulo ber kora jay. , string er length ber kora jay => str.length 

function reverseString(text){
    // 0. it is for normal string
    //for(let i = 0; i < text.length; i++){
    // 4. jokhon string reverse korbo tokhon empty string diye shuru korte hobe. and reversed variable e tarporer string gulo aste aste add korbo. 
   let reversed = '';
   // 1. reverse / shesher theke string show korte hole i er value whole text.length theke -1 korte hobe and loop cholbe 0 index porjonto.
   for(let i = text.length - 1; i >= 0; i--){   
    // 2. text er string gulo element variable e save korbo.
       const element = text[i];
    // 5. first e empty string er pore joto string ashbe shegulo reversed element er moddhe add kore dibo and (element and reversed value gulo console.log korbo)
       reversed = reversed + element;
       console.log(element, reversed);
   }
   // 6. reversed variable return kore dibo
   return reversed;
}
// 3. value declare korbo function e
const myString = 'I am a good boy';
const reversed = reverseString(myString);
console.log('reversed output: ', reversed);


///////////////


// words reverse
function reverseWords(str){
// 1.  myString variable er value / word gulo (' ') diye split korbo. 
   const words = str.split(' ');
// 4. result variable e shob reverse word gulo store korbo 
   const result = [];
   //console.log(words);
   // ['I', 'am', 'a', 'good', 'boy'] {ei word take reverse korbo}
// 2. reverse er for loop e words.full theke (-1) korte hoy
   for(let i = words.length - 1; i >= 0; i--){
// 3. each item(i) reverse korar por jokhon ashbe tokhon notun variable element er vitor word e boshaye dite parbo and element gulo result er vitor push korbo.
       const element = words[i];
       result.push(element);
   }  
//    console.log(result); 
// 5. then shob gulo alada word er string guloke abar sentence er jonno join kore dibo and reversed return korbo.
const reversed = result.join(' ');
return reversed; 
}
const myString = 'I am a good boy';
const reversedWords = reverseWords(myString);
console.log(reversedWords);


// ///full code//////

 // string reverse

// str[0], str[1] => evabe string er vitor element gulo ber kora jay. , string er length ber kora jay => str.length 

function reverseString(text){
    // 0. it is for normal string
    //for(let i = 0; i < text.length; i++){
   let reversed = '';
   for(let i = text.length - 1; i >= 0; i--){   
       const element = text[i];
       reversed = reversed + element;
       console.log(element, reversed);
   }
   return reversed;
}
const myString = 'I am a good boy';
const reversed = reverseString(myString);
console.log('reversed output: ', reversed);

// words reverse
function reverseWords(str){
   const words = str.split(' ');
   const result = [];
   //console.log(words);
   // ['I', 'am', 'a', 'good', 'boy'] {ei word take reverse korbo}
   for(let i = words.length - 1; i >= 0; i--){
       const element = words[i];
       result.push(element);
   }  
//    console.log(result); 
const reversed = result.join(' ');
return reversed; 
}
const myString = 'I am a good boy';
console.log(reverseWords(myString));



/////////////////////////////////////

// Module- 22-9: (advanced) create a fibonacci series using a for loop:

//shobgulo problem vs code e iteration kore dekhte hobe 

// const fibonacci = [1, 1, 2, 3, 4, 5, 8, 13, 21, 34, 55, 89, 144];

/*
fibonnaci er 1 ta pod ager 2 ta poder addition then ager 2 ta value default vabe diye dite hobe.
fibo[3] = fibo[2] + fibo[1];
fibo[4] = fibo[3] + fibo[2];
fibo[5] = fibo[4] + fibo[3];
fibo[50] = fibo[49] + fibo[48];
fibo[487] = fibo[486] + fibo[485];
fibo[n] = fibo[n-1] + fibo[n-2];
fibo[i] = fibo[i - 1] + fibo[i - 2];

*/

const fibo = [0, 1];
// 1. i er value 2 theke shuru korte horte karo fibonacci te default vabe age 2 ta value diye dite hobe.
// 2. 10 ta number dekhabe
for(let i = 2; i <= 10; i++){
    // 3. fibonacci ber korar rule (i er value 2 tai fibo[i=indexnumber]=fibo(2-1) + fibo(2-2) then evabe cholbe)
   fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);


// full code
const fibo = [0, 1];
for(let i = 2; i <= 10; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);