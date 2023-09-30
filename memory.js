// Here we discuss two types of memory
// 1) STACK (premitive)
// 2) HEAP  (Non-premitive) referal

let name = "alakh";
let anotherName = name;
console.log(anotherName);
// if we change the value in anotheName, let see the output
anotherName = "shukla"
console.log(anotherName); // here we change the copy of the value not orignal value so only anotherName 
                         //only anotherName will change value of name remain same 


let userOne = {
    name: "saktiman",
    email: "saktiman123@gmail.com"
}

let userTwo = userOne
console.log(userTwo);
userTwo.email = "sakti321@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);// both value get change coz, here we hve referal of the value not copy.