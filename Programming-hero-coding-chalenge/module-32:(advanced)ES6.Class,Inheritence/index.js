// Practice Problem on map(), filter(), find(), reduce

/*1) You have an odd array(array with odd numbers).[1, 3, 5, 7, 9].Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.*/

// ------------ using for loop -----------
let oddNumbers = [1, 3, 5, 7, 9];
let evenNumbers = [];
for (let oddNumber of oddNumbers) {
  let increamentNumber = oddNumber + 1;
  evenNumbers.push(increamentNumber);
}
console.log(evenNumbers);

// ------------- using map -------------
const numbers = [1, 3, 5, 7, 9];
const makeIncreament = numbers.map(num => num + 1);
console.log(makeIncreament);


/*
2) You are given an array say: [33, 50, 79, 78, 90, 101, 30]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
*/
let randomNumbers = [33, 50, 79, 78, 90, 101, 30];
let filterNumber = randomNumbers.filter(numbers => numbers % 10 === 0);
console.log(filterNumber);



/*
3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
*/

let arrayNumber = [33, 50, 79, 78, 90, 101, 30];
let findNumbers = arrayNumber.find(number => number % 10 === 0);
console.log(findNumbers);


/*
4) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.

*/

// ----------- using for loop -------------
let arr = [1, 9, 17, 22];
let sum = 0;

for (let i = 0; i < arr.length; i++){
  sum += arr[i];
}
console.log("Sum using for loop", sum);

// ------------ using reduce method ------------
let arrayNum = [1, 9, 17, 22];
let summation = arrayNum.reduce((previous, current) => {
  console.log(previous, current);
  return previous + current;
}, 0);
console.log(summation); 


/*
// practice Problem on reduce
    const people = [
        {name: "Menna", age: 20},
        {name: "Rina", age: 15},
        {name: "Suchorita", age: 22},
    ];

5)Challenging: Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.

*/

//  ------------ using for loop --------------
 const people = [
        {name: "Menna", age: 20},
        {name: "Rina", age: 15},
        {name: "Suchorita", age: 22},
 ];
    
let totalSum = 0;
for (let i = 0; i < people.length; i++){
  totalSum += people[i].age;
}
console.log("Total sum of ages", totalSum);

//  ------------ using reduce --------------
const people1 = [
        {name: "Menna", age: 20},
        {name: "Rina", age: 15},
        {name: "Suchorita", age: 22},
];
const totalSumOfAge = people1.reduce((previous, person) => {
  console.log(previous, person.age);
  return previous + person.age;
}, 0);
console.log(totalSumOfAge); 

/*
//  Access Object Values
   
    const student = {
        name: 'Fredie',
        age: 26,
    }

** Console the value of age:
*/
 const student = {
        name: 'Fredie',
        age: 26,
    }
const studentAge = student.age;
console.log(studentAge);



/*
//  Access Object Values

    let data = {
        location: [
            {
            latitude: '34.5, 37.8',
            lontitude: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India'
            }
        ]
    };

** Console the value of city:
*/
 let data = {
        location: [
            {
            latitude: '34.5, 37.8',
            lontitude: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India'
            }
        ]
 };
const searchCity = data.location[0].city;
console.log(searchCity);

/*
//  Access Object Values

const user = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",   // console the value of email
  "address": {                   // console the value of address
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",       // console the value of city
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",        // console the value of lat
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",  // console the value of company name
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
*/
const user = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",   // console the value of email
  "address": {                   // console the value of address
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",       // console the value of city
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",        // console the value of lat
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",  // console the value of company name
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

const userEmail = user.email;
console.log(userEmail);

const userAddress = user.address;
console.log(userAddress);

const userCity = user.address.city;
console.log(userCity);

const userLat = user.address.geo.lat;
console.log(userLat);

const userCompany = user.company;
console.log(userCompany);






/*
Qs. You are creating a website for your college. Create a class User with 2 properties, name &
email. It also has a method called viewData( ) that allows user to view website data.
*/

 let data1 = "secret information";

 class User {
   constructor (name, email) {
     this.name = name;
     this.email = email;
   }

   viewData() {
     console.log("data = ", data1);
   }
 }

let student1 = new User("sradha", "abc@gmail.com");
 console.log(student1);
let student2 = new User("aman", "aman@gmail.com");
 console.log(student2);
let student3 = new User("Dean", "dean@gmail.com");
 console.log(student3);


 /*
 Qs. Create a new class called Admin which inherits from User. Add a new method called
 editData to Admin that allows it to edit website data.
 */

 let data2 = "secret information";

 class User1 {
   constructor (name, email) {
     this.name = name;
     this.email = email;
   }

   viewData() {
     console.log("data = ", data2);
   }
 }

 class Admin extends User1{
   constructor (name, email) {
     super(name, email);
   }
   editData() {
     data2 = "some new value";
   }
 }


let student4 = new User1("sradha", "abc@gmail.com");
 console.log(student4);
let student5 = new User1("aman", "aman@gmail.com");
 console.log(student5);
let student6 = new User1("Dean", "dean@gmail.com");
 console.log(student6);

let admin1 = new Admin("admin", "admin@college.com");
 console.log(admin1);
