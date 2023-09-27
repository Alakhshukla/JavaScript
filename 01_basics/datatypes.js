"use strict"  // treat all js code as a newer verson

//alert("Hello") // it will not run because we are using nodejs, not browser

/* We've many way to write code.
but code readability should be high.*/

 console.log(3+8);  console.log("Alakh");
//it will run but it's not good practice 

console.log(5+3);  
console.log("Alakh"); // now it perfect 

 let name = "Alakh Shukla" //string
 let age = 19   // number
 let isCorrect = true    //boolean


/********************************** DATA-TYPES ********************/
/*
# premitive 

number => 2 to power 53
bigInt => for very big number
String => ""
boolean => true/false
null => standalone value 
undefine
symbol => unique(mostly we use in reactjs)


# Non-primitive
object
array 
function()
*/
 
 console.log(typeof(age)) // to know the type of variable

 console.log(typeof(null)); // it return object
 console.log(typeof(undefined)); // it return undefine
 



/****************************-------CONVERSION-----*************************************/

 let num = 33
console.log(typeof num) //number

let score = "33aaa"
console.log(typeof score) //string

let scoreInNum = Number(score)
console.log(typeof scoreInNum); //number

let int = "33aaa"
let intInNum = Number(int) 
console.log(intInNum) // NaN (Not a Number)
console.log(typeof intInNum);  // number

let value = null
console.log(typeof value);   // object 


let value2 = undefined
console.log(typeof value2);    //undefined

let numb = 0
let numbInBoolean = Boolean(numb)
console.log( numbInBoolean);  //false


/* 
1 => true
0 => false 
"" =>false
"alakh" => true
*/


let someNum = 13
let someNumInString = String(someNum)
console.log(someNumInString);
console.log(typeof someNumInString); // string


/******************************* OPERATIONS *************************/

let a = 5
let aOfNeg = -a
console.log(aOfNeg); // -5

/*
 we have to many operation 
 + =>              console.log(2+2);
 - =>              console.log(2-2);
 *  =>             console.log(2*2);
 ** => for power   console.log(2**2);
 /  =>            console.log(2/2);
 %  => for remender console.log(2%2);
*/

let str1 = "Hello"
let str2 =  " Alakh"
let str3 = str1+str2
console.log(str3);  // concatinate

console.log(2+4+6);  //12
console.log(2+4+"6");  //66
console.log("2"+4+6);  // 246
// after string it convert all datatype int string

console.log(true);
console.log(+true);    //1

let marks = 98
marks++     // postfix
 console.log(marks);
++marks     // prefix
console.log(marks);

/**************************** COMPERISION  ********************/
 /*these are some basic camerision all return boolean result
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2>=1);
console.log(2==1);*/

console.log("1"==1); //true

console.log("1"===1); // false it also check datatype


console.log(null>0);  // false
console.log(null==0); //false
console.log(null<=0);  //true

/*The reason is that an equality check == and comparisons > < >= <= work differently. 
Comparisons convert null to a number, treating it as 0. 
That’s why (3) null >= 0 is true and (1) null > 0 is false.*/