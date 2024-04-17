//--------------- Practice Problem 1 ----------------------

// 1. Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const multiplication = multiply(5, 10, 2);
console.log(multiplication);

// 2. Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani.
const threeLines = `
    I am a web developer.
    I love to code.
    I love to eat biryani.
`
console.log(threeLines);

//  3. Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const add = (a, b = 10) => a + b;
const addition = add(10);
console.log(addition);



// -------------------------------------------------

//--------------- Practice Problem 2 ----------------------
/*
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.
*/
const filterFriendsWithEvenLength = (friendsArray) => {
    let evenLengthFriends = [];

    for (let friend of friendsArray) {
        if (friend.length % 2 === 0) {
            evenLengthFriends.push(friend);
        }
    }
    return evenLengthFriends;
}
const myFriends = ["Alice", "Bobi", "charlie", "eva"];
const result = filterFriendsWithEvenLength(myFriends);
console.log(result);


// -------------------------------------------------

//--------------- Practice Problem 3 ----------------------

/*
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.
*/

const averageSquaredElements = (arr) => {
    let sumOfSquared = 0;

    for (let i = 0; i < arr.length; i++) {
        sumOfSquared += arr[i] * arr[i];
    }
    return sumOfSquared / arr.length;
};
const numbers = [2, 3, 4];
const results = averageSquaredElements(numbers);
console.log(results);

//--------------- Practice Problem 4 ----------------------
/*
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.
*/
const maximumOfCombinedArrays = (arr1, arr2) => {
    let combinedOfArrays = [...arr1, ...arr2];
    let maximumNumber = Math.max(...combinedOfArrays);
    return maximumNumber;
}
const array1 = [2, 3, 4, 5];
const array2 = [6, 7, 8, 9];
const resultsOfMaximumNumber = maximumOfCombinedArrays(array1, array2);
console.log(resultsOfMaximumNumber);