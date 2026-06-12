//strings 
const name  = "yuvansh"
const count = 50
//console.log( name + count + "value");
// this is not modern way of joinin strings it is outdated and inefficient 

//modern way is to use string interpolation 
//using backtics to directly implement variables in a string using syntax ${}
console.log(`hello, my name is ${name} and my count is ${count}`);
const gamename = new String('yuvansh')
//here the string converts into a object and key value pair we can see this in console
console.log(gamename[0]);//here it gives the character at 0th index of string 
//some string functions and methods 
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf("u"));
console.log(gamename.substring(0,4));
 console.log(gamename.slice(-6,3))
const newstring = "   yuvi   "
console.log(newstring.trim());





