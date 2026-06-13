//object declaration 
/*
//const tinderuser = new Object();//singleton object
const tinderobject = {};// non singleton object
tinderobject.id = "123";
tinderobject.name = "yuvi"
//console.log(tinderobject);
 const user = {
    email:"yhnm@gmail.com",
    fullname:{ name :{
        firstname:"yuvansh",
        lastname:"vishnoi"
    }
}}
 //access interconnected objects 
 console.log(user.fullname.name.firstname);
 //combining of objects 
 const obj1 = { 1: "a", 2: "b" };
 const obj2 = { 3: "c", 4: "d" };

 const combinedObject = { ...obj1, ...obj2 };

 console.log(combinedObject);

 //accessing keys of an object
    console.log(Object.keys(combinedObject));
    //accessing values of an object
    console.log(Object.values(combinedObject));
    //accessing entries of an object
    console.log(Object.entries(combinedObject));
 
*/

//object de-structuring
 const course = {
    coursename:"javascript",
    price:"123"
 }
 const {price: paise} = course
// console.log(price);
console.log(paise);
