
//  const array = new array (1,2,3,4) // this is also valid syntax to declare array
 //in js we can store multiple datatype element in array
  
 const arr1 = [13,"Alakh",1.2,]
//  console.log(arr1);
//  array with in array
const arr2 = [11, 13,"alakh",["shukla", 11, 20]]
// console.log(arr2[1]);
// in array have 0th indexingconst arr = [1,2,4,5]


let arr3 = ["phy","chem","maths","bio"]
//ARRAYS METHODS
// console.log(arr3.length);    // to check the length of array
// arr3.push("comp");          // add at last
// arr3.unshift("comp")       // add element at first 
console.log(arr3);
// arr3.pop()               // remove elements from last
// arr3.shift()            // remove from first 
// arr3.splice(1,3)       // 3 elements remove from 1 position

// console.log(arr3.indexOf("chem"));  // to check the index of the elements

console.log(arr3.includes("chem"))   // present ginen elements or not


// MULTIDEMENSIONAL ARRAY:-

let bookWithPage = [
    ["math",300],
    ["phy",250],
    ["bio",350]
]
console.log(bookWithPage[1][0]);

let a = [1,5,6]
let b = [2,4,7]
console.log(a.concat(b));  // add two array

console.log(Array.from("alakh"));// to break dwon from charactor wise
