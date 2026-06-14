// this keyword and arrow function
const user = {
    username:"yuvi",
    price:"999",
    welcomemessage: function(){
   console.log(`${this.username} , welcome to website`);
      console.log(this);
      
}
}
user.username = "yuvansh";
user.welcomemessage()

user.username = "yuvi";
console.log(this);
function chai(){
    let user = "yuvi"
   // console.log(this.user);
}
chai();
//arrow function 
const chai = function(){
    let user = "yuvi"
    //console.log(this.user);
}
chai();

const chai = () =>{
    let user = "yuvi"
    console.log(user);
}
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // 5
const addImplicit = (a, b) => a + b;

console.log(addImplicit(2, 3)); // 5