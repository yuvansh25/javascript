//numbers and maths 
const score = 40 
console.log(score);
const balance = new Number(200);
console.log(balance);//here it is specifically a number 
console.log(balance.toString());//here it is converted to string and cann be used as a string 
console.log(balance.toFixed(2));//it shows how many numbers should be after the decimal 


const newnum = 123.7890
console.log(newnum.toPrecision(3));//it precise tha value of teh number with the precision value 

//maths +++++++++++++++++++++++++++++
   // it comes with javascript by default 

console.log(Math);
console.log(Math.abs(-4));//chnages -ve to +ve 
console.log(Math.round(4.6));//it round off's the value 
console.log(Math.ceil(4.6));//it round off's the value as ceiling value  
console.log(Math.floor(4.6));//it round off's the value as lowest value 
console.log(Math.min(1,2,3,4,5,6));
console.log(Math.max(1,2,3,4,5,6));
console.log(Math.random());//random value b/w 0 and 1 
//if you want a random value inn a specifoc range 

const min = 10 ;
const max = 20 ;

console.log((Math.random() * (max-min +1)) + min);
//it give the range of random numbers b/w 10 to 20 










