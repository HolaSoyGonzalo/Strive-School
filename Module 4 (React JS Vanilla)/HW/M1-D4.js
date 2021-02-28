/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
const area = (l1, l2) => {
  return l1 * l2;
};
console.log(area(5, 8));

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

function crazySum(n1, n2) {
  if (n1 === n2) {
    return 3 * (n1 + n2);
  } else {
    return n1 + n2;
  }
}
console.log(crazySum(5, 8));
console.log(crazySum(5, 5));

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

function crazyDiff(n1) {
  if (n1 <= 19) {
    return 19 - n1;
  } else {
    return (n1 - 19) * 3;
  }
}

console.log(crazyDiff(2));

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

/* WRITE YOUR CODE HERE */
function boundary(int) {
  return (20 < int && int <= 100) || int === 400 ? true : false;
}

console.log(boundary(117));

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

/* WRITE YOUR CODE HERE */
function strivify(s) {
  const result = `strive${s}`;
  if (s.startsWith("Strive")) {
    return s;
  } else {
    return result;
  }
}
console.log(strivify("s"));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */

const check3and7 = function (p) {
  const multiple3 = "It is a multiple of 3";
  const multiple7 = "It is a multiple of 7";
  if (p > 0 && p % 3 === 0) {
    return;
  }
};

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/
const reverseString = (r) => {
  return r.split("").reverse().join("").toLowerCase();
};
console.log(reverseString("Murder for a jar of red rum"));

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/
/* WRITE YOUR CODE HERE */
function upperFist(str) {
  let splitStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}
console.log(upperFist("js is making me literally crazy"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

const cutString = (a, b) => {
  let newString = a.slice(1);
  let newString2 = b.slice(1);

  console.log("Parameter a without the first letter is: ", newString);
  console.log("Parameter b without the first letter is: ", newString2);
};

cutString("Hello", "World");

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */
function giveMeRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function giveMeRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(giveMeRandom(0, 10));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
