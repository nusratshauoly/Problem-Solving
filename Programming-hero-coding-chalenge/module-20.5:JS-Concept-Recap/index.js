/*
১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে। 
*/
let numbers = [3, 4, 5];
let myName = 'Nusrat';
const isStudent = true;




/*
২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 
*/

for (let i = 1; i <= 100; i++){
   console.log(i);
}



/*
৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 
*/

for (let i = 51; i <= 80; i = i + 2){
   console.log(i);
}



/*৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 
*/

function addThreeNumbers(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    return sum;
}
console.log(addThreeNumbers(3, 4, 5));


/*
5. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
*/
function celciusToFahrenheit(celcius) {
  let fahrenheit = celcius * 9 / 5 + 32;
  return fahrenheit;
}
console.log(celciusToFahrenheit(30));



/*
6. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 
*/

function fahrenheitToCelsius(fahrenheit) {
  let celsius = (5 / 9) * (fahrenheit - 32);
  return celsius;
}
console.log(fahrenheitToCelsius(122));





/*
8. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 
*/


function getGrades(marks) {
    if (marks >= 90) {
        return 'A+';
    }
    else if(marks >= 80){
        return 'A';
    }
    else if(marks >= 70){
        return 'A-';
    }
    else if(marks >= 60){
        return 'B';
    }
     else if(marks >= 50){
        return 'C';
    }
    else {
        return 'F';
    }
}
const marks = 80;
const grade = getGrades(marks);
console.log(grade);


/*
9. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 
*/

/*
//explanation:
In this code, we define the calculateInterest() function that takes three parameters: principal, rate, and time.

The function multiplies the principal amount by the rate and time to calculate the interest, which is stored in the interest variable.

We then define the values for principal, rate, and time. In this example, we set principal to 1000, rate to 0.05 (which represents a 5% interest rate), and time to 2 years.

Next, we call the calculateInterest() function with the provided values and assign the result to the interest variable.

Finally, we log the calculated interest to the console using console.log().

This means that for a principal amount of 1000, an interest rate of 5%, and a time period of 2 years, the calculated interest is 100.
*/

function calculateInterest(principle, rate, time) {
    const interest = principle * rate * time;
    return interest;
}

const principle = 1000;
const rate = 0.05;
const time = 2; // 2 years

const interest = calculateInterest(principle, rate, time);
console.log("Interest", interest);



/*
একটু কোড লিখে অবজেক্ট এর সব প্রপার্টি এর নাম এবং মান আউটপুট হিসেবে দেখাও। 
*/
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Engineer",
  city: "New York"
};

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

/*
In this code, we use the Object.entries() method to convert the object's properties into an array of key-value pairs. Each key-value pair is represented as an array [key, value].

We then use the forEach() method to iterate over each key-value pair. Within the loop, we destructure the [key, value] array and log the key and value using console.log().
*/