// 1) Create a function that counts the Number of Digits in Each Element, e.g: [123, 45, 6] becomes [3, 2, 1]).

const { flushSync } = require("react-dom");

// function countNumber() {
//   let arr = [123, 45, 6];
//   let counted = [];

//   for (let i = 0; i < arr.length; i++) {
//     counted.push(arr[i].toString().length);
//   }
//   return counted;
// }
// console.log(countNumber());

// 2) Write a function that takes an array of numbers and reverses the order of its elements using a loop. Don't use reverse(). e.g: [1,2,3] => [3,2,1]

// function reverseArray() {
//   let arr2 = [1, 2, 3];
//   let arr3 = [];

//   for (let i = arr2.length - 1; i >= 0; i--) {
//     arr3.push(arr2[i]);
//   }
//   return arr3;
// }
// let arr3 = reverseArray();
// console.log(arr3);

// 3) Write a function that returns the sum of the squares of all the numbers in an array (e.g., [1, 2, 3] returns 1^2 + 2^2 + 3^2 = 14). Use a loop to calculate the squares.

// function squares() {
//   let arr = [1, 2, 3, 4];
//   let squared = [];
//   for (i = 0; i < arr.length; i++) {
//     squared.push(arr[i] * arr[i]);
//   }
//   return squared;
// }
// let squared = squares();
// console.log(squared);

// 4) Write a function that counts the total number of characters in all the strings in an array. e.g:["a", "ab", "abc"] => 6
// function countTotalChars() {
//   let arr = ["a", "ab", "abc"];
//   let totalCount = 0;
//   for (i = 0; i < arr.length; i++) {
//     totalCount += arr[i].length;
//   }
//   return totalCount;
// }
// let counted = countTotalChars();

// console.log(counted);

// 5) Write a function that takes an array of strings and returns the new array with the palindrome words. palindrome words are level, becase if you reverse this word its the same, like madam.  e.g: ['level', 'giga', 'ana', 'button', 'abba'] => ['level', 'ana', 'abba']

// function findPalindromes(arr) {
//   let palindromes = [];

//   for (let i = 0; i < arr.length; i++) {
//     let word = arr[i];
//     let reversedWord = word.split("").reverse().join("");

//     if (word === reversedWord) {
//       palindromes.push(word);
//     }
//   }

//   return palindromes;
// }

// let words = ["level", "giga", "ana", "button", "abba"];
// let palindromeWords = findPalindromes(words);
// console.log(palindromeWords); // Output: ['level', 'ana', 'abba']

// 6) Task: Write a function that filters out all words from an array that contain special characters (e.g., @, #, $).

// function filterSpecialChars(arr) {
//   const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

//   return arr.filter((word) => !specialCharPattern.test(word));
// }

// let words = ["hello", "world", "foo@bar", "good#day", "normalWord"];
// let filteredWords = filterSpecialChars(words);
// console.log(filteredWords); // Output: ['hello', 'world', 'normalWord']

// Bonus: Return both the filtered array and the removed words. dont use filter metohds use it with for loop.
function filterSpecialChars(arr) {
  let filteredWords = [];
  let removedWords = [];
  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

  for (let i = 0; i < arr.length; i++) {
    if (specialCharPattern.test(arr[i])) {
      removedWords.push(arr[i]);
    } else {
      filteredWords.push(arr[i]);
    }
  }

  return {
    filteredWords,
    removedWords,
  };
}

let words = ["hello", "world", "foo@bar", "good#day", "normalWord"];
let result = filterSpecialChars(words);

console.log("Filtered Words:", result.filteredWords); // Output: ['hello', 'world', 'normalWord']
console.log("Removed Words:", result.removedWords); // Output: ['foo@bar', 'good#day']
