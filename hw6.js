// 1) make a promise that rejects or resolves 50/50
function fiftyFiftyPromise() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // 50/50 chance
    success ? resolve("Resolved successfully!") : reject("Rejected!");
  });
}

// Example usage
fiftyFiftyPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// 2) write a function that get data from: https://jsonplaceholder.typicode.com/users and return result
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// Example usage
getUsers().then((data) => console.log(data));

// 3) write a function that try to get data from: https://jsonplaceholde.typicode.com (link is invalid for this task) if request will failed try to retrieve it 5 times
async function getDataWithRetries(url, retries = 5) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(
          `Attempt ${attempt}: Server responded with status ${response.status}`
        );
      }
    } catch (error) {
      console.error(error);
      if (attempt === retries) {
        throw new Error("Max retries reached. Failed to fetch data.");
      }
    }
  }
}

// Example usage (invalid URL)
getDataWithRetries("https://jsonplaceholde.typicode.com")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// 4) write a function that try to get data from this two sources:  https://dummyjson.com/users and https://jsonplaceholder.typicode.com/users and return the only response which has faster response, use fetch or axios method.
async function getFasterResponse() {
  const url1 = "https://dummyjson.com/users";
  const url2 = "https://jsonplaceholder.typicode.com/users";

  try {
    const [fasterResponse] = await Promise.race([
      fetch(url1).then((res) => res.json()),
      fetch(url2).then((res) => res.json()),
    ]);
    return fasterResponse;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example usage
getFasterResponse().then((data) => console.log(data));

// 5) create a three promise that returns any kind of arrays with difference time. one of one of them should be reject other two should be fulfilled. merged the only fulfilled arrays.
function promise1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve([1, 2, 3]), 1000); // Fulfilled after 1 second
  });
}

function promise2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve([4, 5, 6]), 2000); // Fulfilled after 2 seconds
  });
}

function promise3() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Promise 3 rejected!"), 1500); // Reject after 1.5 seconds
  });
}

async function mergeFulfilledPromises() {
  try {
    const results = await Promise.allSettled([
      promise1(),
      promise2(),
      promise3(),
    ]);
    const fulfilled = results
      .filter((p) => p.status === "fulfilled")
      .map((p) => p.value);
    const mergedArray = [].concat(...fulfilled);
    console.log(mergedArray);
  } catch (error) {
    console.error("Error in promises:", error);
  }
}

// Example usage
mergeFulfilledPromises();
