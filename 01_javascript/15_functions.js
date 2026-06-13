//functions
function saymyname(){
    console.log("y")
    console.log("u")
    console.log("v")
    console.log("a")
    console.log("n")
    console.log("s")
    console.log("h")
}
saymyname();
 function add2num(num1,num2){
    console.log(num1 + num2);
    

 }
  const result = add2num(3,4);
  console.log(result);//it only prints value and does not return value 
  //so the result is undefined 

  function addnum(num1,num2){
    const result = num1 + num2;
    return result;
  }
   const final = addnum(5,6);
   console.log(final);
   
