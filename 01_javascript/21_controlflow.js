// if statements 
const score = 75;

if (score >= 50) {
  console.log("You passed!");
}const a = 5;
const b = 8;

// true when a is less than b
if (a < b) {
  console.log("a is less than b");
}

// true when a is less than or equal to b
if (a <= b) {
  console.log("a is less than or equal to b");
}

// true when a is exactly equal to 5
if (a === 5) {
  console.log("a is equal to 5");
}

// true when b is not equal to 5
if (b !== 5) {
  console.log("b is not equal to 5");
}

// true when b is greater than a
if (b > a) {
  console.log("b is greater than a");

  // if else 
}const temperature = 18; // current temperature in degrees Celsius

if (temperature >= 25) {
  // this block runs when temperature is 25 or higher
  console.log("It's warm outside. Wear light clothes.");
} else {
  // this block runs when the first condition is false
  console.log("It's cool outside. Take a jacket.");
}
//and and or operators
const age = 20;
const hasTicket = true;

// && means "and": both conditions must be true
if (age >= 18 && hasTicket) {
  console.log("You can enter the event.");
} else {
  console.log("You cannot enter the event.");
}

const isMember = false;
const hasInvitation = true;

// || means "or": only one condition needs to be true
if (isMember || hasInvitation) {
  console.log("You may join the party.");
} else {
  console.log("You may not join the party.");
}

//++++++++++++++++++ switch case +++++++++++++++++

const month = 3; // 1-12, where 1 = January, 3 = March

// switch evaluates the month variable and matches it against each case
switch (month) {
  // case: each possible value to match
  case 1:
    console.log("January - Cold weather");
    break; // exits the switch block to prevent "fall-through"
  
  case 2:
    console.log("February - Still cold");
    break;
  
  case 3:
    console.log("March - Spring begins"); // This runs since month = 3
    break;
  
  case 4:
    console.log("April - Getting warmer");
    break;
  
  case 5:
    console.log("May - Nice weather");
    break;
  
  case 6:
    console.log("June - Summer starts");
    break;
  
  case 7:
    console.log("July - Very hot");
    break;
  
  case 8:
    console.log("August - Still hot");
    break;
  
  case 9:
    console.log("September - Autumn begins");
    break;
  
  case 10:
    console.log("October - Getting cooler");
    break;
  
  case 11:
    console.log("November - Cold again");
    break;
  
  case 12:
    console.log("December - Winter, holiday season");
    break;
  
  // default: runs if no case matches (like "else" in if-else)
  default:
    console.log("Invalid month number");
}

//falsy values
// false , 0 , -0 , 0n , "" , null , undefined , NaN
//truthy values
// true , {} , [] , 42 , "0" , "false" , new Date() , -42 , 3.14 , -3.14 , Infinity , -Infinity



//nullish coalescing operator
const userInput = null; // This could also be undefined or an empty string

// Using nullish coalescing operator to provide a default value
const finalInput = userInput ?? "Default Value";

console.log(finalInput); // Output: "Default Value"

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//yerniary operator
// Ternary operator: condition ? valueIfTrue : valueIfFalse
// It's a shorthand for if-else statements

const age = 20;

// Simple ternary: assigns a value based on condition
const canVote = age >= 18 ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote); // Output: "Yes, you can vote"

// Another example with numbers
const score = 75;
const result = score >= 50 ? "Pass" : "Fail";
console.log(result); // Output: "Pass"

// Ternary with calculations
const temperature = 30;
const weather = temperature > 25 ? "Wear light clothes" : "Take a jacket";
console.log(weather); // Output: "Wear light clothes"

// Nested ternary (not recommended as it's hard to read)
const marks = 85;
const grade = marks >= 80 ? "A" : marks >= 70 ? "B" : marks >= 60 ? "C" : "F";
console.log(grade); // Output: "A"

// Ternary in function
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(4)); // Output: "Even"
console.log(checkEvenOdd(7)); // Output: "Odd"