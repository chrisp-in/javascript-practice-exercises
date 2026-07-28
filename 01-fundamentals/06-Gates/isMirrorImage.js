// Write a function `isMirrorImage(str1, str2)` that checks if one string is the 
// reverse of the other. Ignore spaces, punctuation, and capitalization.

// **Example:**

// ```jsx
// javascript
// Copy code
// isMirrorImage("Hello", "olleH"); // true
// isMirrorImage("World", "dlroW"); // true
// isMirrorImage("Test", "tseT "); // false

// ```
function isMirrorImage(str1 , str2){
    return str1.split("").reverse().join("") === str2;
}
    console.log(isMirrorImage("Test", "tseT "));