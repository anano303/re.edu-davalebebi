// 1) Check if any number in the array is divisible by 5 and if true, find its index e.g: [3, 6, 10, 12] → 2

function findIndexDivisibleBy5(arr) {
  return arr.findIndex((num) => num % 5 === 0);
}

console.log(findIndexDivisibleBy5([3, 6, 10, 12])); // 2

// 2) Filter out negative numbers from a nested array e.g: [[1, -2], [3, -4], [5]] → [1, 3, 5]
function filterNegativeNumbers(arr) {
  return arr.flat().filter((num) => num >= 0);
}

console.log(filterNegativeNumbers([[1, -2], [3, -4], [5]])); // [1, 3, 5]

// 3) Filter out non-array elements and then check if the remaining elements are arrays e.g: [1, [2, 3], "hello", [4]] → true for remaining arrays
function filterAndCheckArrays(arr) {
  const filtered = arr.filter((element) => Array.isArray(element));
  return filtered.every(Array.isArray);
}

console.log(filterAndCheckArrays([1, [2, 3], "hello", [4]])); // true

// 4) Flatten a nested array and find the sum of all elements e.g: [[2, 4], [6, 8]] → 20

function flattenAndSum(arr) {
  return arr.flat().reduce((sum, num) => sum + num, 0);
}

console.log(
  flattenAndSum([
    [2, 4],
    [6, 8],
  ])
); // 20

// 5) Flatten a nested array, then square each number, and calculate sum the squares
function flattenSquareAndSum(arr) {
  return arr.flat().reduce((sum, num) => sum + num ** 2, 0);
}

console.log(
  flattenSquareAndSum([
    [2, 4],
    [6, 8],
  ])
); // 120

// 6) const characters = [
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     eye_color: "blue",
//     gender: "male",
//   },
//   {
//     name: "Darth Vader",
//     height: "202",
//     mass: "136",
//     eye_color: "yellow",
//     gender: "male",
//   },
//   {
//     name: "Leia Organa",
//     height: "150",
//     mass: "49",
//     eye_color: "brown",
//     gender: "female",
//   },
//   {
//     name: "Anakin Skywalker",
//     height: "188",
//     mass: "84",
//     eye_color: "blue",
//     gender: "male",
//   },
// ];
// Get the total number of characters by eye color (hint. a map of eye color to count)
// e.g: {
// brown: 1,
// yellow: 1,
// blue: 2
// }

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

function getCharacterCountByEyeColor(characters) {
  return characters.reduce((acc, character) => {
    const color = character.eye_color;
    acc[color] = (acc[color] || 0) + 1;
    return acc;
  }, {});
}

console.log(getCharacterCountByEyeColor(characters));
// { blue: 2, yellow: 1, brown: 1 }
