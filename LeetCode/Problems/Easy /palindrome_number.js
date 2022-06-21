// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

const palindrome = (num) => {
  // Enter code Here
};

const isPalindrome = (x) => {
  if (x < 0) return false;

  return x.toString().split('').reverse().join('') === x.toString();
};

const isPalindrome_1 = (x) => {
  if (x < 0) {
    return false;
  }
  let num = x; // store the number
  let rev = 0; // store the reversed number
  while (num > 0) {
    let rem = num % 10; // find the remainder of the number divided by 10
    rev = rev * 10 + rem; // add the remainder to the reversed number times 10 and add it to the reversed number
    num = Math.floor(num / 10); // divide the number by 10 to find the next digit
  }
  return rev === x; // return true if the reversed number is equal to the original number
};
