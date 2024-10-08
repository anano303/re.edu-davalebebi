// 1) შექმენით ინფუთი რომლის სერჩის დროს რექუესთს გააგზავნით შემდეგ აიპიაიზე: https://api.escuelajs.co/api/v1/products?title=wooden როგორც ხედავთ თაითლი არის ქუერი პარამეტრი, დებაუნს ტექნიკით გააკეთეთ ინფუთი რომლის ჩაწერაზეც, დარექუსთდება სწორედ title პარამეტრით.
let timeout;

// Debounced function to search for products by title
async function searchProducts(query) {
  clearTimeout(timeout);
  timeout = setTimeout(async () => {
    if (query) {
      const url = `https://api.escuelajs.co/api/v1/products?title=${encodeURIComponent(
        query
      )}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); // Display fetched data in the console
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  }, 500); // Debounce with 500ms delay
}
// 2) წამოიღეთ ინფორმაცია შემდეგი ეიპიაიდან: https://jsonplaceholder.typicode.com/users , მოსული დატა გაპარსეთ შემდეგნაირად, თითოეულ ობიექტს უნდა ჰქონდეს მხოლოდ 4 ფროფერთი აიდი, სახელი, იუზერნეიმი და იმეილი
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    // Filter only the required properties
    const filteredData = data.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    }));

    console.log(filteredData); // Log the filtered data
    return filteredData;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// Example usage
getUsers();

// 3) გაქვთ ორი აიპიაი https://fakestoreapi.com/users  და https://jsonplaceholder.typicode.com/users თქვენი მიზანია ორივე ერთდოულად დაარიზოლვოთ და ისე გამოიტანოთ დომში შესაბამისი ინფორამცია იუზერებზე, ანუ სანამ ორივე აიპიაი პასუხს არ დააბრუნებს მანამდე არაფერი გამოაჩინოთ დომში.
async function fetchUsersFromAPIs() {
  try {
    const [users1, users2] = await Promise.all([
      fetch("https://fakestoreapi.com/users").then((res) => res.json()),
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
    ]);

    // Combine the user data from both APIs
    const combinedUsers = [...users1, ...users2];

    // Display the combined user data in the DOM
    const userList = document.getElementById("userList");
    combinedUsers.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
      userList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// Call the function when the window loads
window.onload = fetchUsersFromAPIs;
// 4) დაწერეთ ფუნცქია რომელიც დაგვილოგავს მაუსის კორდინატებს მას შემდეგ რაც გავაჩერებთ მაუსს, გამოიყენეთ დიბაუნს ტექნიკა
let timeout2;

// Debounced function to log mouse coordinates
function logMouseCoordinates(event) {
  clearTimeout(timeout2);
  timeout2 = setTimeout(() => {
    console.log(`Mouse Coordinates: X=${event.clientX}, Y=${event.clientY}`);
  }, 300); // Debounce with 300ms delay
}

// Attach event listener for mouse movement
window.addEventListener("mousemove", logMouseCoordinates);
