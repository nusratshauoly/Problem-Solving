/* Practice Problem 1:

 Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
 help Harry calculate how much money the shopkeeper will return.
 Input:
 The first line of the input is the taka Harry’s mom gave him.
 The second line is the cost of 1 kg of oranges and 1 kg of apples.
 Output:
 Print the result.
 Sample Input:
 1000
 700
 Output: 300 */
 var givenTk = 1000;
 var applesPrice = 350;
 var orangesPrice = 350;
 var totalPrice = applesPrice + orangesPrice;
 var getbackMoney = givenTk - totalPrice;
 console.log(getbackMoney);



/* Practice Problem 2 :

Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
Bangla of a student.
Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.
Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50
Output:
71.04
*/
var mathematicsMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathematicsMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
var averageMarks = totalMarks / 5 ;
var averageTwoDecimal = averageMarks.toFixed(2);
console.log(averageTwoDecimal);



/* Practice Problem 3
John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
combine these two strings and print them in one line. Help John write the program.
Input:
The first and the second lines of the input contain the strings.
Output:
Print the result in one line.

Sample Input:
I am going to be
an awesome web developer
Output:
I am going to be an awesome web developer
*/

var firstSentence = "I am going to be";
var secondSentence = "an awesome web developer";
var fullSentence = firstSentence + " " + secondSentence;
console.log(fullSentence);



/* Practice Problem 4
Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
remainder would be if she divided the number by 5. Help Sarah write the program.
Input:
The first line of the input contains the number.
Output:
Print the remainder.

Sample Input:
119
Output:
4
*/
var givenNumber = 119;
var divideNumber = 5;
var remainder = givenNumber % divideNumber;
console.log(remainder);




