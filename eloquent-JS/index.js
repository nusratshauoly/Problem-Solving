"use script";
/*

// There is a construct called switch that is intended to express such a “dispatch” in a more direct way. Unfortunately, the syntax JavaScript uses for this (which it inherited from the C/Java line of programming languages) is somewhat awkward—a chain of if statements may look better. Here is an example:


switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella");
    break;

  case "Sunny":
    console.log("Dress lightly");
    break;

  case "cloudy":
    console.log("Go Outside");
    break;

  default:
    console.log("Unknown weather type!");
    break;
}

// ----------------

// You can start with a program that prints out the numbers 1 to 7, which you can derive by making a few modifications to the even number printing example given earlier in the chapter, where the for loop was introduced.

// Now consider the equivalence between numbers and strings of hash characters. You can go from 1 to 2 by adding 1 (+= 1). You can go from "#" to "##" by adding a character (+= "#"). Thus, your solution can closely follow the number-printing program.


for (let line = "#"; line.length <= 7; line += "#") {
  console.log(line);
}

// --------------------- fizzbazz ----------------------

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

// -------------------------

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.


let size = 8;
let space = "";

for (let i = 0; i < size; i++) {
  // Ensure `i < size` to get exactly `size` rows
  for (let j = 0; j < size; j++) {
    // Ensure `j < size` to get exactly `size` columns
    if ((i + j) % 2 == 0) {
      // Use (i + j) % 2 to alternate between " " and "#"
      space += " "; // Even sum → add a space
    } else {
      space += "#"; // Odd sum → add a "#"
    }
  }

  // After completing one row, add a newline to move to the next row
  space += "\n";
}
console.log(space); // Print the final chessboard pattern
*/

// -------------------- Functions -------------------

// const makeNoise = function () {
//   console.log("Pling!");
// };
// makeNoise();

//

// const roundTwo = function (n, step) {
//   let remainder = n % step;
//   return n - remainder + (remainder < step / 2 ? 0 : step);
// };
// console.log(roundTwo(23, 10));

// ---------------
// const hummus = function (factor) {
//   let ingredient = function (amount, unit, name) {
//     let ingredientAmount = amount * factor;
//     if (ingredientAmount > 1) {
//       unit += "s";
//     }
//     console.log(`${ingredientAmount} ${unit} ${name}`);
//   };
//   ingredient(1, "can", "chickpeas");
//   ingredient(0.25, "cup", "tahini");
//   ingredient(0.25, "cup", "lemon juice");
//   ingredient(1, "clove", "garlic");
//   ingredient(2, "table spoon", "olive oil");
//   ingredient(0.5, "teaspoon", "cumin");
// };
// console.log(hummus(5));

// ------------------- arrow function --------------
// const roundTo = (n, step) => {
//   let remainder = n % step;
//   return n - remainder + (remainder < step / 2 ? 0 : step);
// };

// console.log(roundTo(2, 3));

// -------------- arrow function with no parameter
// const horn = (){
//   console.log("toot");
// }

// ------------------ the call stack --------------

// function greet(who) {
//   console.log("Hello " + who);
// }
// greet("Harry");
// console.log("Bye");

// ---------
// function chicken() {
//   return egg();
// }

// function egg() {
//   return chicken();
// }
// console.log(chicken() + " came first");

// --------------- Optional Arguments -------------

// function square(x) {
//   return x * x;
// }
// console.log(square(4, true, "hedgehog")); // 16

// -------------

// function minus(a, b) {
//   if ((b = undefined)) return -a;
//   else return a - b;
// }
// console.log(minus(10)); // -10
// console.log(minus(10, 5)); // 5

// ------------------------
// function roundTo(n, step = 1) {
//   let remainder = n % step;
//   return n - remainder + (remainder < step / 2 ? 0 : step);
// }
// console.log(roundTo(4.5)); // 5
// console.log(roundTo(4.5, 2)); // 4.5

// ------------------ closure ----------------
//  ----- treat function as values : What happens to local bindings when the function call that created them is no longer active? -----
// function wrapValue(n) {
//   let local = n;
//   return () => local;
// }
// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1());
// console.log(wrap2());

// -------------------
// function multiplier(factor) {
//   return (number) => number * factor;
// }
// let twice = multiplier(2);
// console.log(twice(15));

// ------------- recursion -----------------
