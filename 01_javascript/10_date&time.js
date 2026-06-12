// dates 
let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toDateString());
console.log(typeof mydate);

//date syntax +++++++++++++++++++++++++++++++++

//let mynewdate = new Date(2023,2,23);//here 2023 is year 2 is month -1 and 23 is date 
//let mynewdate = new Date(2023,2,23,5,3);//here 2023 is year 2 is month -1 and 23 is date  and 5 is hr and 3 is minute 
//let mynewdate = new Date("2023-01-15");//it is in yy mm dd but output will be in mm dd yy
let mynewdate = new Date("01-15-2025");//it is in mm dd yy 
console.log(mynewdate.toLocaleString());
 let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(Math.floor(mytimestamp/1000));
//to present day date operations 
let today = new Date();
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getMonth()+1);//+1 because the months starts from 0 to 11 


