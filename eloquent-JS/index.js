"use script";

/*
There is a construct called switch that is intended to express such a “dispatch” in a more direct way. Unfortunately, the syntax JavaScript uses for this (which it inherited from the C/Java line of programming languages) is somewhat awkward—a chain of if statements may look better. Here is an example:
*/

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

/* You can start with a program that prints out the numbers 1 to 7, which you can derive by making a few modifications to the even number printing example given earlier in the chapter, where the for loop was introduced.

Now consider the equivalence between numbers and strings of hash characters. You can go from 1 to 2 by adding 1 (+= 1). You can go from "#" to "##" by adding a character (+= "#"). Thus, your solution can closely follow the number-printing program.
*/

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
/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

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
