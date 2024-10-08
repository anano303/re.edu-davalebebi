// 1) write a function that takes a random number as an argument and logs the random number while the argument number and random number are equal. argument number should be from 0 to 10.

function logRandomNumber(num) {
  if (num < 0 || num > 10) {
    console.log("Please enter a number between 0 and 10");
    return;
  }

  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * 11);
    console.log(randomNum);
  } while (randomNum === num);
}

logRandomNumber(5);

// 2) write a function that imitates to return fake data, use setTimeout. make both async/await and .then.catch methods.

async function fetchFakeDataAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; // 50% chance of success
      if (success) {
        resolve("Fake data retrieved!");
      } else {
        reject("Failed to fetch fake data.");
      }
    }, 2000);
  });
}

fetchFakeDataAsync()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Using async/await syntax
async function getData() {
  try {
    const data = await fetchFakeDataAsync();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

getData();

// 3)write a sleep function. make a function that takes a ms as an argument and when you call this function waits untill this function resolved. use setTimeout and promises.
// eg: console.log('first')
// await sleep(2000)
// console.log('second')
// second should sleep after 2 seconds

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log("first");
sleep(2000).then(() => console.log("second"));
