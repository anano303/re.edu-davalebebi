// 1) You need to write a function that reverses the words in a given string. Words are always separated by a single space. e.g: "Hello World" --> "World Hello"
function reverse(str) {
  let reversed = [];
  let wordsArray = str.split(" ");

  for (let i = wordsArray.length - 1; i >= 0; i--) {
    reversed.push(wordsArray[i]);
  }
  let reversedStr = reversed.join(" ");
  return reversedStr;
}
console.log(reverse("hello world"));

// 2) Write a function that cleans whole sentences to numbers. eg: 'This looks5 grea8t!' -> 'This looks great!'
function cleanSentence(sentence) {
  let cleanedSentence = sentence.replace(/[0-9]/g, "");
  return cleanedSentence;
}
console.log(cleanSentence("This looks5 grea8t!"));

// 3) Given a string, you have to return a string in which each character (case-sensitive) is repeated once. e.g: "String"      -> "SSttrriinngg"
function doubleChars(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }

  return result;
}

console.log(doubleChars("String")); // Output: "SSttrriinngg"
console.log(doubleChars("Hello World")); // Output: "HHeelllloo  WWoorrlldd"

// e.g: "Hello World" -> "HHeelllloo  WWoorrlldd"

// 4) Make a function that takes a sentences and return the abbreaviate of it. e.g: Sam Harris => S.H.   e.g: hello world everyone => H.W.E
function abbreviate(sentence) {
  let words = sentence.split(" ");
  let abbreviation = words.map((word) => word[0].toUpperCase()).join(".");

  return abbreviation + ".";
}

console.log(abbreviate("Sam Harris")); // Output: "S.H."
console.log(abbreviate("hello world everyone")); // Output: "H.W.E."

// 5)Make a function that takes a number as a argument and return rendom word which length would be the number. e.g: 4 => 'h1zt',  5 => 'zvc1e'. you should build random string from all characters and numbers.

function randomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    let randomChar = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    result += randomChar;
  }

  return result;
}

console.log(randomString(4)); // Output: e.g. 'h1zt'
console.log(randomString(5)); // Output: e.g. 'zvc1e'
