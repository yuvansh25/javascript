// functions with objects and arrays 
function calculateprice(...num1){
 return num1;
}
console.log(calculateprice(2,7,8,9,5));
const user = {
    username:"yuvi",
    price:"123",
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    return
}
handleobject(user);
//arays 
const array = [1,2,3,4,5,6,7,8,9];
function return2value(array){
    return array[1];
}
const value = return2value(array);
console.log(value);
