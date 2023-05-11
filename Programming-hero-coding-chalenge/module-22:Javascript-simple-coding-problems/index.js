/*
1. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 
*/





/////////////////////////////////////////////////////////

/*
2. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে। 
*/




/////////////////////////////////////////////////////////

// 3. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 





/////////////////////////////////////////////////////////

// 4. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 





/////////////////////////////////////////////////////////

//5. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 






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

// Homework1: write a function that will take 3 numbers will return the max number.

// Homework2: write a function that will take 3 parameters and will return the min number.
// first time do it using if-else
//  second time do it using Math.min or Math.max