// high order loops used for traversing the arrays 

// traversing an array using for...of loop
const arr = [1,2,3,4,5];
for(const num of arr){
    console.log(num);
    

}
//traversing a string using for...of loop
const str = "Hello";
for(const char of str){
    console.log(char);
}
//maps

const map = new Map();
map.set('name', 'John');
map.set('age', 30); 
for(const [key, value] of map){
    console.log(key, value);
}

const myobject = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};
for(const [key, value] of Object.entries(myobject)){
    console.log(key, value);
}

const obj = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    sw:"swift",
}

for (const key in obj) {
    console.log(`${key}:${obj[key]}`);
}

for (const key in arr) {
    console.log(key); // this prints only the indexes of the array
}

// foreach loop for a simple array
arr.forEach(element => {
    console.log(element);
});

// array with objects inside
const students = [
    { name: 'Alice', age: 20, major: 'Math' },
    { name: 'Bob', age: 22, major: 'Physics' },
    { name: 'Carol', age: 21, major: 'Computer Science' }
];

// traverse the array using forEach and access properties of each object
students.forEach((student, index) => {
    // student is the current object in the array
    // index is the position of the object in the array
    console.log(`Student ${index + 1}: ${student.name}, Age: ${student.age}, Major: ${student.major}`);
});