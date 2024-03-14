//More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, 
//greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array 


// Tests for equality and inequality with strings
let string1:string='hello'
let string2:string= 'world'
console.log("equality test:" ,string1 === string2); // false
console.log("inequality test:" , string1!==string2); // true

// Tests using the lower case function
let uppercaseString:string='HELLO';
console.log("Lowercase test:", 
uppercaseString.toLowerCase()==="hello");//true

// Numerical tests
let num1:number=10;
let num2:number=5;
console.log('Equality test:',num1===num2); // false
console.log('Inquality test:' , num1!==num2); // true
console.log('Greater than test:' , num1>num2); // true
console.log('less than test:',num1<num2); // false
console.log('Greater than or equal to test:',num1>=num2); // true
console.log('less than or equal to test:',num1<=num2); // false


// Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(false || false); // false

// Test whether an item is in an array
let x:number= 3;
let y:number= 7;
console.log("AND operator test:", (x < 5) && (y>2)); //
console.log(OR)

// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log(!fruits1.includes("grape")); // true
console.log(!fruits1.includes("apple")); // false
