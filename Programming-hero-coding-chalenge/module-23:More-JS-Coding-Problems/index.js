/*
১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো। 
Write a function. It will take three parameters. These three parameters will be the lengths of the three sides of a triangle. Now your task is to calculate the area of the triangle by doing some calculations inside the function. If the length of three sides of a triangle is given 
*/

function calculateTriangleArea(side1, side2, side3) {
  // Check if the given lengths form a valid triangle
  if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    return "Invalid triangle: the sum of any two sides must be greater than the third side.";
  }

  // Calculate the semi-perimeter of the triangle
  var semiperimeter = (side1 + side2 + side3) / 2;

  // Calculate the area using Heron's formula
  var area = Math.sqrt(semiperimeter * (semiperimeter - side1) * (semiperimeter - side2) * (semiperimeter - side3));

  return area;
}
// Example usage
var side1 = 5;
var side2 = 6;
var side3 = 7;

var area = calculateTriangleArea(side1, side2, side3);
console.log("The area of the triangle is:", area);

/*
The given function calculateTriangleArea(side1, side2, side3) takes three parameters: side1, side2, and side3, which represent the lengths of the sides of a triangle.

The function begins by checking if the given side lengths form a valid triangle. It does this by applying the triangle inequality theorem, which states that the sum of any two sides of a triangle must be greater than the third side. If this condition is not met, the function returns the message "Invalid triangle: the sum of any two sides must be greater than the third side."


Certainly! Let's break down the code to understand how the output is calculated.

The given function calculateTriangleArea(side1, side2, side3) takes three parameters: side1, side2, and side3, which represent the lengths of the sides of a triangle.

The function begins by checking if the given side lengths form a valid triangle. It does this by applying the triangle inequality theorem, which states that the sum of any two sides of a triangle must be greater than the third side. If this condition is not met, the function returns the message "Invalid triangle: the sum of any two sides must be greater than the third side."

If the side lengths do form a valid triangle, the function proceeds to calculate the area using Heron's formula.

Heron's formula calculates the area of a triangle when the lengths of its sides are known. The formula involves three main steps:

Calculate the semi-perimeter (semiperimeter) of the triangle. It is obtained by summing all three sides and dividing by 2.

Calculate the difference between the semi-perimeter and each side length: (semiperimeter - side1), (semiperimeter - side2), and (semiperimeter - side3).

Multiply the semi-perimeter by the differences calculated in step 2, and take the square root of the result. This gives us the area of the triangle.

Finally, the function returns the calculated area.

In the given example, the side lengths are 5, 6, and 7. Since these lengths form a valid triangle, the function proceeds with the calculations. The semi-perimeter is (5 + 6 + 7) / 2 = 9. Applying Heron's formula, the area is calculated as:

area = Math.sqrt(9 * (9 - 5) * (9 - 6) * (9 - 7))
     = Math.sqrt(9 * 4 * 3 * 2)
     = Math.sqrt(216)
     ≈ 14.696938456699069

The area of the triangle is: 14.696938456699069

This represents the calculated area of the triangle with side lengths 5, 6, and 7.

/*

/////////////////////////////////////

২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 
Is a number a prime number? Write a function to check it in javascript
*/

function isPrime(number) {
  // Check if the number is less than 2, which is not prime
  if (number < 2) {
    return false;
  }

  // Check if the number is divisible by any integer from 2 up to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Found a divisor, so the number is not prime
    }
  }

  return true; // No divisors found, the number is prime
}

// Example usage
var number = 17;

if (isPrime(number)) {
  console.log(number + " is a prime number.");
} else {
  console.log(number + " is not a prime number.");
}

/*
The given function isPrime(number) takes a parameter number, which represents the number to be checked.

The function begins by checking if the number is less than 2. In mathematics, prime numbers are defined as positive integers greater than 1 that are divisible only by 1 and themselves. Since any number less than 2 cannot meet this criteria, the function immediately returns false if the number is less than 2.

If the number is greater than or equal to 2, the function proceeds to the next step, which is checking for divisors. It does this by looping from 2 up to the square root of the number.

Inside the loop, the function checks if the current loop index (i) is a divisor of the number. This is done by checking if the remainder of the division (number % i) is equal to 0. If the remainder is 0, it means that i is a divisor of the number and therefore the number is not prime. In such a case, the function immediately returns false.

If no divisor is found within the loop, the function reaches the end and returns true. This means that no integer from 2 up to the square root of the number evenly divides the number, indicating that the number is prime.

In the example usage, the number being checked is 17. Since 17 is greater than 1 and it is not divisible by any integer from 2 up to the square root of 17 (which is approximately 4.123), the function returns true. Therefore, the output will be:

17 is a prime number.

You can replace the value of number with any positive integer to check if it is prime or not.
*/

////////////////////////////////////

// Module-23-3: Remove duplicate items from an array

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul', 'abul'];

//  4. uniqueNames array declare jetar moddhe shudhu unique value gulo thakbe for loop + if condition chalanor por duplicate value gulo ignore korbe
let uniqueNames = [];

//  1. function declare korbo pramater (names) nam e and er vitor for loop chalabo names array er full length e
function removeDuplicate(names){
    for(let i = 0; i < names.length; i++){
// 2. names er vitorer each value k name variable er vitor dekhte pari 
       const name = names[i];
       //console.log(name);
// 3. value gulo duplicate kina check korbo (includes = er kaj serch kore dekha) diye r jodi duplicate na hoy then uniquename variables e push kore dibo and full uniqeNames array return korbo.
       if(uniqueNames.includes(name) === false){
          uniqueNames.push(name);
      }
    }
    return uniqueNames;
}
const uniqueName = removeDuplicate(names);
console.log(uniqueNames);


// /// full code //////////

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul', 'abul'];

let uniqueNames = [];

function removeDuplicate(names){
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(uniqueNames.includes(name) === false){
            uniqueNames.push(name);
        }
      }
      return uniqueNames;
  }
  const uniqueName = removeDuplicate(names);
  console.log(uniqueNames);


  ////////////////////////////////////////

// Module- 23-4: Write foo/fizz , bar/buzz, foobar/fizzbuzz if divisible by 3 or 5 both / fizzbuzz (its called fizzbuzz problem also)

  /*
1. show output from : 1 - 50
2. If the number is divisible by 3 then instead of the number, show "foo" 
3. If the number is divisible by 5 then instead of the number, show "bar" 
4. If the number is divisible by both 3 and 5 then instead of the number, show "foobar" 
*/

//  1. first e 1 theke 50 porjonto number print korbo
for(let i = 0; i <= 50; i++){
    // 2. if condition e jei number gulo 3 diye vag jabe (if er moddhe jodi first condition e true hoy tahole r baki condition check kore na. kintu ekhane jodi first e shudhu 3 diye vag kore true hoye jay tahole (3 and 5) diye vag er condition check korbena tai (3 and 5) er condition ta age dibo)
    
      if(i % 3 === 0 && i % 5 === 0){
        console.log("foobar");
      }
       else if(i % 3 === 0){
          console.log("foo");
      }
       else if(i % 5 === 0){
          console.log("bar");
      }
       else{
          console.log(i);
      }
       //console.log(i);
    }
    
    
    //// full code ////////////
    for(let i = 0; i <= 50; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("foobar");
          }
           else if(i % 3 === 0){
              console.log("foo");
          }
           else if(i % 5 === 0){
              console.log("bar");
          }
           else{
              console.log(i);
          }
        }


///////////////////////////////////////////



// Module-23-5: Use add and multiplication to calculate wood requirements
/*
    fixed: per item wood requirements.
     1. chair --> 3 cft
     2. table --> 10 cft
     3. bed --> 50 cft

     Vary: quantity
    */

     function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
        const perChairWood = 3;
        const perTableWood = 10;
        const perBedWood = 50;
 
        const chairWood = chairQuantity * perChairWood;
        const tableWood = tableQuantity * perTableWood;
        const bedWood = bedQuantity * perBedWood;
 
        const totalWood = chairWood + tableWood + bedWood;
        return totalWood; 
     }
 
     // 1. j j koyta furniture lagbe sheta ber koro (chair:2 ta, table : 2ta, bed : 5ta)
     const totalWood = woodCalculator(2, 2, 5);
     console.log('total wood required: ', totalWood);



//////////////////////////////////////////////////

// Module-23-6: Find the cheapest phone from an array of phone objects

 // Module-23-6: Find the cheapest phone from an array of phone objects

    //2. amra age compare kortam number er shathe 
    //[45, 21, 6, 98, 56];


    const phones = [
        {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
        {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver'},
        {name: 'iphone', camera: 12, storage: '32gb', price: 83000, color: 'silver'},
        {name: 'Xaomi', camera: 12, storage: '32gb', price: 52000, color: 'silver'},
        {name: 'Oppo', camera: 12, storage: '32gb', price: 20000, color: 'black'},
        {name: 'Nokia', camera: 12, storage: '32gb', price: 44000, color: 'silver'},
        {name: 'HTC', camera: 12, storage: '32gb', price: 62000, color: 'silver'}, 
     ];
 
     function cheapestPhone(phones){
 // 3.1: first e ekta array declare korbo jekhane cheapest phone gulo rakhbo if/else and loop chaliye
        let cheapest = phones[0];
 
        for(let i = 0; i < phones.length; i++){
         // 1. loop chalanor por each phone er detailes (phones) variable theke pabo and (phone) variable e rakhbo.
            const phone = phones[i];
            //console.log(phone);
 // 3.2:  but now ekhon compare korbo phone price er shathe (notun jei phone value ta ashbe sheta for loop(first e dekhbo for loop 2 ta phone price nibo then compare korbo k choto jeta choto oita nibo then er porer mobile er price er shathe compare korbo eivabe compare kore cheapest price ta ber korbo) chalaye j phone ache oitar cheye cheapest kina jodi hoy tahole nibo)
            if(phone.price < cheapest.price){
               cheapest = phone;
             }      
         }
         return cheapest;   
     }
     const mySelection = cheapestPhone(phones);
     console.log(mySelection);
 
 
     // ////// full code ////////
 
     const phones = [
         {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
         {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver'},
         {name: 'iphone', camera: 12, storage: '32gb', price: 83000, color: 'silver'},
         {name: 'Xaomi', camera: 12, storage: '32gb', price: 52000, color: 'silver'},
         {name: 'Oppo', camera: 12, storage: '32gb', price: 20000, color: 'black'},
         {name: 'Nokia', camera: 12, storage: '32gb', price: 44000, color: 'silver'},
         {name: 'HTC', camera: 12, storage: '32gb', price: 62000, color: 'silver'}, 
      ];
  
      function cheapestPhone(phones){
         let cheapest = phones[0];
 
        for(let i = 0; i < phones.length; i++){
         const phone = phones[i];
         if(phone.price < cheapest.price){
             cheapest = phone;
           }      
       }
       return cheapest;   
   }
   const mySelection = cheapestPhone(phones);
   console.log(mySelection);
 
 ///////////////////////////////////
 
 // new homework: shob cheye highest camera power jar sheta ber korno( ager array e but shudhu camera value change)
 
 /*
 camera: 12, camera: 10, camera: 7, camera: 17, camera: 25, camera: 6, camera: 10.
 
 */

const phones = [
    {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver'},
    {name: 'iphone', camera: 7, storage: '32gb', price: 83000, color: 'silver'},
    {name: 'Xaomi', camera: 17, storage: '32gb', price: 52000, color: 'silver'},
    {name: 'Oppo', camera: 25, storage: '32gb', price: 2000, color: 'black'},
    {name: 'Nokia', camera: 6, storage: '32gb', price: 44000, color: 'silver'},
    {name: 'HTC', camera: 10, storage: '32gb', price: 62000, color: 'silver'},
];

function cheapestPhone(phones) {
    let highest = phones[0];

    for (let i = 0; i < phones.length; i++){
        let phone = phones[i];
        if (phone.camera > highest.camera) {
            highest = phone;
        }
    }
    return highest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);



 //////////////////////////////////////////

//  Module-23-7: Calculate the total cost of the products in a shopping cart

//[45, 65, 45, 98]; (erokom number thakle direct add kore ditam)

const shoppingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 2200},
    {name: 'pant', price: 3700},
    {name: 'belt', price: 600}
];

function totalCost(products){
// 1. jodi add kori tahole first initial value hobe 0
    let sum = 0;
    for(let i = 0; i < products.length; i++){
       const product = products[i];
// 2. sum korbo object er moddhe shudhu product er price gulo
       sum = sum + product.price;
       //console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('total expense today:', expense);


// //////////////////////////// ekhon shopping cart er quantity ber korbo /////////////////////

const shoppingCart = [
    {name: 'shoe', price: 1200, quantity: 2},
    {name: 'shirt', price: 2200, quantity: 5},
    {name: 'pant', price: 3700, quantity: 4},
    {name: 'belt', price: 600, quantity: 3}
];

function totalCost(products){
// 1. jodi add kori tahole first initial value hobe 0
    let sum = 0;
    for(let i = 0; i < products.length; i++){
       const product = products[i];
// 2. sum korbo object er moddhe shudhu product er quantity & price gulo
       const productTotal = product.price * product.quantity;
       sum = sum + productTotal;
       //console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('total expense today:', expense);


///////////////////////////////////////////

// Module-23-8: (advanced) Multi-layer discount price calculation

/*
1.(first condition) if ticket numbers is less than 100, per ticket price : 100tk

2.(second condition) if ticket numbers is more than 100, but less than 200, first 100 tickets will be 100/ticket, rest tickets price will be : 90 taka per piece
first 100 ---> 100tk
rest -------->  90tk

3.(third condition) If you purchase more than 200 tickets
 first 100 ---> 100tk
 101-200 ----->  90tk
 200+    ----->  70tk
*/
function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    // 1. first condition
    if(ticketQuantity <= 100){
       const price = ticketQuantity * first100Rate;
       return price;
    }
// 2. second condition
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
// 3. 3rd condition
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}

// const price = ticketPrice(20); (ekhane koyta ticket nibo sheta bujhaise = 1/ 20/ 100/ any number)


// const price = ticketPrice(1);
const price = ticketPrice(100);
console.log('price: ', price);


///////////////////////////////////////////////////////
