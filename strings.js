// Strings are for storing or manipulatin text.String 
//Strings are immutable 
const name = "alakh"
const surname = "shukla"
console.log(name + surname); //this is old way 
// now we use 'backticks' to concatinate our strings and
//  by this modern way we can also perform function
console.log(`hello my name is ${name} and my surname is ${surname}`);

// we can perform many methods on strings

const color = "yellow"
console.log(color.length);// to check length of string
console.log(color.substring(1,5));
console.log(color.slice(3,6));
const value = "     abcdef     "
console.log(value.trim());
console.log(color.toUpperCase());
/*
SOME STRINGS METHODS....

String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCo
*/