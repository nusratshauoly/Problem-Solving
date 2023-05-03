//19.3

// while condition
//1.loop variable
//2. condition inside while
//3.loop body
//4.change the loop variable
var roastGiven = 0; //loop variable
while(roastGiven < 7){ // condition inside while
   console.log("roast please"); //loop body
   roastGiven++;  //change the loop variable
//    console.log(roastGiven); //loop body
}

// 1 to 10 numbers print using while print
var number = 1;
while(number <= 10){
   console.log(number);
   number++;
}

// even number print (1 to 10) using while loop
var number = 0;
while(number <= 10){
   console.log(number);
   number = number + 2;
}

// odd number print (1 to 10) using while loop
var number = 1;
while(number <= 10){
   console.log(number);
   number = number + 2;
}

// 19.4: 

// 1 to 100 all odd number
var number = 1;
while(number <= 100){
console.log(number);
number = number + 2;
}

// javascript for loop
for(var roastGiven = 0; roastGiven < 7; roastGiven++){
    console.log("roast please!");
}

// simple version of for loop
console.log("simple for loop");
for (var i = 0; i < 7; i++){
    // console.log("roast den please!");
    console.log(i);
}

// declare 1 to 10 using for loop
for(var i = 0; i <= 10; i++){
       console.log(i);
}

// declare 1 to 10 even number using for loop
for(var i = 0; i <= 20; i+=2){
    console.log(i);
}

// declare 1 to 10 odd number using for loop
for(var i = 1; i <= 20; i+=2){
    console.log(i);
}

// 19.5: run a loop for each element

// target: display every elements of an array using for loop
var numbers = [45, 87, 89, 56, 32, 51, 25, 51, 32];

for(var i = 0; i < numbers.length; i++){ //array te j koyta value ase oigular position ber korar jonn
    var number = numbers[i];
    console.log(number);
}

// display items on table using for loop
var items = ["bottle", "mouse", "pen"];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    console.log(item);
}

// 19.6: break and continue
// break condition using for loop
for(var i = 0; i <= 20; i++){
    console.log(i);
    if(i > 10){  //kono condition e break likhbo (condition er beshi hole break bondho hoye jabe) .jodi(i > 100) dei tahole 20 porjonto for loop er man porjonto jeye condition break hoye jabe.
      break;
    }
}

// break condition using while loop
var roastGiven = 0;
while(roastGiven < 10){
    console.log('roast please!');
    roastGiven++;
    if(roastGiven > 4){
       break;
    }
}

// example1: pen e debug korar shomoy break korbe means pen show korbena.
var items = ["bottle", "mouse", "pen"];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    if(item == 'pen'){
         break;
    }
    console.log(item);
}

// example2: break statement
var numbers = [45, 87, 89, 56, 32, 170, 51, 25, 51, 32];

for(var i = 0; i < numbers.length; i++){ //array te jokhon 170 ashbe tokhon e break korbe. 
    var number = numbers[i];
    if(number > 100){
      break;
    }
    console.log(number);


// example 3 : continue statement/50 er cheye boro output gulo skip korbe ba loop continue korbe output e dekhabe na
var numbers = [45, 87, 89, 56, 32, 170, 51, 25, 51, 32];

for(var i = 0; i < numbers.length; i++){ //array te jokhon  ashbe tokhon e continue korbe. 
    var number = numbers[i];
    if(number > 50){
      continue;
    }
    console.log(number);
}


// 19.7 for and while loop in a reverse way

// while inverse way
var num = 1;
while(num <= 10){
    console.log(num);
    num++;
}
// while reverse way
var num = 10;
while(num >= 1){
    console.log(num);
    num--;
}

// for inverse way
for(var i = 0; i <= 10; i++){
    console.log(i);
}
// for reverse way
for(var i = 10; i >= 1; i--){
    console.log(i);
}

// practice problem 1
/* প্রাকটিস চ্যালেঞ্জ-১

প্রতিদিন তোমার কাজ কি? 

১) রাত ৮ টা বাজে মডিউল আনলক করো  

২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো

৩) ভিডিও দেখতে দেখতে নোটস নাও 

৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো 

৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো 

এখন তোমার কাজ হচ্ছে একটা for লুপ 5 বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো। */

let works = ["রাত ৮ টা বাজে মডিউল আনলক করো ", "ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো", "ভিডিও দেখতে দেখতে নোটস নাও", "মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো", "কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো"];
for(let i = 1; i <= works.length; i++){
    let work = works[i];
    console.log(work);
}

// practice problem 2
/*
প্রাকটিস চ্যালেঞ্জ-২: 

আবার একই জিনিস while লুপ চালিয়ে দেখানো। 
*/

let works1 = 1;
while(works1 <= 5){
//   console.log(works1);
  console.log("রাত ৮ টা বাজে মডিউল আনলক করো ");
  console.log("ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো");
  console.log("ভিডিও দেখতে দেখতে নোটস নাও");
  console.log("মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো");
  console.log("কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো");
  works1++;
}

// practice problem 3
/*
প্রাকটিস চ্যালেঞ্জ-৩: 

উপরের প্রব্লেমটাই while লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও 
*/

let works2 = 5;
while(works2 >= 1){
    console.log("কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো");
    console.log("মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো");
    console.log("ভিডিও দেখতে দেখতে নোটস নাও");
    console.log("ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো");
    console.log("রাত ৮ টা বাজে মডিউল আনলক করো ");
    works2--;
}

// practice problem 4
/*
প্রাকটিস চ্যালেঞ্জ-4: 

উপরের প্রব্লেমটাই for লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও 
*/

for(let i = 5; i >= 1; i--){
    console.log("কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো");
    console.log("মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো");
    console.log("ভিডিও দেখতে দেখতে নোটস নাও");
    console.log("ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো");
    console.log("রাত ৮ টা বাজে মডিউল আনলক করো ");
}



