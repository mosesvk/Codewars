// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {

}

/// Function Signature. Taking in a String and Returning a number

// Two different pseudo codes (longer or shorter)

/// Longer Solution
//    1. declare a variable that is set to 0 because we want to return that variable at the end 
//    2. We are going to declare a variable that is an array that stores all vowels
//    3. Loop through the string (that we are passing in the function) 
//    4. Also nest another loop to go through the vowels array. 
//    5. if the index in the first loop is equal to the index in the second loop, then we're gonna want to increment the variable that we declared on step 1. 


/// Shorter Solution
//    1. returning string(or whatever the parameter's name).match
//    2. in that match, we are going to use the regex code to target all of the vowels
//    3. make sure to include "gi" to make sure it's global and case Insensitive. 
//    4. Make sure to add an OR operator that includes an empty array. This is in case a string is passed in with no vowels, in which the function will return 0 
//    5. Make sure to wrap this whole .match inside of a .length to find the length of the array 