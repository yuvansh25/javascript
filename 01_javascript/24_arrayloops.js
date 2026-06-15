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