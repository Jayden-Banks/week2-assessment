
//////////////////PROBLEM 1////////////////////Completed!
/*
  Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. 
  The function should return the sum of the two parameters.
*/

let sum = (num1, num2) => num1 + num2

//console.log(sum(5,2)) //test

//////////////////PROBLEM 2////////////////////Completed!
/*
  Create a function called 'greaterThanFive' that takes in a single parameter called 'number'. 
  Check to see if 'number' is greater than 5.
  If it is, return a true boolean. 
  If it's not, return a false boolean.
*/

let greaterThanFive = number => (number > 5) ? true : false

//console.log(greaterThanFive(5), greaterThanFive(6)) //test

//////////////////PROBLEM 3////////////////////Completed!
/*
  Create a function called 'findZWords' that takes in one parameter, 'word'. 
  Your function should check to see if the name begins with the letter "Z"
  If the name does begin with Z, return the string: 'the name begins with Z'. 
  If the name does not begin with Z, return the string: 'the name does not begin with Z'.
*/

let findZWords = word => {
  return (word[0] === 'Z') ? 'the name begins with Z' : 'the name does not begin with Z'
}

//console.log(findZWords('Zebra'), findZWords('Yolanda')) //test

//////////////////PROBLEM 4////////////////////Completed!
/*
  Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. 
  Have the function take the two parameters and return a string that says 
  "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Joseph loves music"
*/

let iLove = (name, love) => `${name} loves ${love}`

//console.log(iLove('Jayden', 'Vali')) //test