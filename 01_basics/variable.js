const accId = 1234
// not changeable
let email = "alakh@.com"
var state = "Uttar Pradesh"
city = "ghaziabad"   // it is also valid syntax to assign value but we not follow it,

console.table([accId, email, state])
/* we not use var keyword,
because block scope and functional scope*/
let value  // it return undefine
console.table([accId, email, state, value])

