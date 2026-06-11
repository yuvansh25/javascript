// there are only two types od datatypes 
//primitive and non-primitive 
// they are categorised by how they are stored
//primitive are stored by call by value 
//there are 7 types of data types 
/*
string
null 
undefined 
number 
boolean 
symbol 
big int
second type f data types
(non-primitive datatype) is by value by reference 
arrays 
objects 
functions 
 */
const heroes = ["ironman","thor","stark"]//arrays 
let myobj = {// object
    name: "yuvi",
    age:20,
}
//functions 
let myfunction = function(){
    console.log("hello world");
    
}
//javascript is dynamically typed language 
//defining of symbols 
const id = Symbol("123")
const anotherid = Symbol("123")
console.log( id === anotherid);

