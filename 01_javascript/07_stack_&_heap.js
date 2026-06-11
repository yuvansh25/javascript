// stack is used in primitive type 
// heap is used in non-primitive type
let mygamename = "ydarkknight"
let anothername = mygamenme;
console.log(anothername);//here it is called by value and given a copy of value 
anothername="sdarkknight"
console.log(anothername);//here the value of anothername changes but the gamename remains same 
let user1 = {
    name:"yuvansh",
    age:20,
}
let user2 = user1;
console.log(user2.name)// here it goes for original value of user1 
user2.name = "shorya";//here it changes the original value 
console.log(user1.name);//here the original value changes of the user 1 


