// 1. Write a function named `getFullName` that accepts two input `firstName` and `lastName` and return
// the `fullName`

function getFullName(firstName,lastName){
    return firstName + lastName
}


// 2. Write a function named `isPalindrome` that accepts one input returns `true` or `false` based on
// wether the value passed is palindrome or not.
function isPalindrome(s) {
    return s == s.split("").reverse().join("") ? true : false;
}

// Create a function called `getCircumfrence`:
// Pass the radius of a circle to the function and it returns the circumference based on the radius,
//  and output `The circumference is NN`

 function getCircumfrence (radius){
     let x = Math.PI;
     return `The circumference is ${Math.floor(2 * x * radius)}`
 }

//  Create a function called `getArea`:
// Pass the radius to the function and it returns the area based on the radius, and output `The area is NN`.
function getArea (radius){
    let x = Math.PI;
    return `The area is ${Math.floor(x * radius** radius)}`
}
module.exports = {
    getFullName,
    isPalindrome,
    getCircumfrence,
    getArea
} 

