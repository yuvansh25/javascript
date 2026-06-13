// objects can be declared by two types 
//one is literal and one is constructor 
//when object is created by constructor it is known as singleton 
//singleton 
//object literals 
const mysym = Symbol("symbol");//creating a suymbol 

const jsuser = {
    name:'yuvansh',
    age:20,
    [mysym]:"mysymbol",
    email:"yuvanshvishnoi@gmail.com",
    week:["mon","tues"],
}
//access of objects 
console.log(jsuser.email);
console.log(jsuser["email"]);//another method to declare a object 

console.log(jsuser[mysym]);
//updating a key value pair 
jsuser.email = "yuvi@gmail.com"
//object.Freeze(jsuser);
//when u freeze an object then no changes are updated in the onject 
jsuser.email = "abc@gmail.com"

//adding a function in a object 
jsuser.greetings = function() {
    console.log("function executed ");
    

}
console.log(jsuser.greetings);
 


