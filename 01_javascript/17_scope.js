// global and local scope

// Global variables are declared outside functions or blocks.
// They can be accessed anywhere in the program.
let globalLet = "I am global let";
const globalConst = "I am global const";
var globalVar = "I am global var";

function showScope() {
  // Local variables are declared inside a function or block.
  // They are only available within that scope.
  let localLet = "I am local let";
  const localConst = "I am local const";
  var localVar = "I am local var";

  console.log(globalLet);   // accessible: global variable
  console.log(globalConst); // accessible: global variable
  console.log(globalVar);   // accessible: global variable

  console.log(localLet);    // accessible: local variable
  console.log(localConst);  // accessible: local variable
  console.log(localVar);    // accessible: local variable
}

showScope();

// Outside the function, local variables are not available.
console.log(globalLet);   // accessible: global variable
console.log(globalConst); // accessible: global variable
console.log(globalVar);   // accessible: global variable

// The following lines would cause errors if uncommented,
// because local variables are not in the global scope.
// console.log(localLet);
// console.log(localConst);
// console.log(localVar);

