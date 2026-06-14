// IIFE (Immediately Invoked Function Expression)
//iife is used to remove the pollution caused by global variables. It is a function that runs as soon as it is defined. It is a design pattern which produces a lexical scope using JavaScript's function scoping. This helps to avoid variable hoisting from within blocks, protect against polluting the global environment and simultaneously allow public access to methods while retaining privacy for variables defined within the function.
// Syntax examples:
// 1) Anonymous function form:
//    (function() { /* code */ })();
// 2) Named function form:
//    (function name() { /* code */ }());
// 3) Arrow function form:
//    (() => { /* code */ })();
// Use-cases: create a private scope, avoid global pollution, run setup code immediately.

// Simple example — creates a private scope and runs immediately:
(function() {
    const message = 'Hello from IIFE';
    console.log(message); // prints: Hello from IIFE
})();

// Example that returns a value from an IIFE:
const doubled = (function(num) {
    return num * 2;
})(5);
console.log(doubled); // prints: 10

(function() {
    console.log("This is an immediately invoked function expression");
})();

//iife can also be written using arrow function
(() => {
    console.log("This is an immediately invoked arrow function expression");
})();