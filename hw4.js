// 1)  Write a function that takes two or more objects as arguments and merges them into a single object

// function mergeObjects(...objects) {
//   return Object.assign({}, ...objects);
// } ეს 1 ვარიანტი

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };
// const obj4 = { ...obj1, ...obj2, ...obj3 }; ეს მეორე

function mergeObjectsSpread(...objects) {
  return { ...objects };
}

const mergedObjSpread = mergeObjectsSpread(obj1, obj2, obj3);
// console.log(obj4); // { a: 1, b: 3, c: 4, d: 5 }
console.log(mergedObjSpread);

// 2)  Write a function that takes an object and a key as input and deletes the specified key from the object.
function deleteKeyFromObject(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

const obj = { a: 1, b: 2, c: 3 };
const updatedObj = deleteKeyFromObject(obj, "b");
console.log(updatedObj); // { a: 1, c: 3 }

// 3) Create an object representing a car with properties for make, model, and year. Then add a method that returns the car's full description.
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  getDescription() {
    return `${this.year} ${this.make} ${this.model}`;
  },
};

console.log(car.getDescription()); // "2022 Toyota Corolla"

// 4) Create an object representing a shopping cart. Add methods to add items, remove items, and calculate the total price.

const shoppingCart = {
  items: [],

  addItem(name, price) {
    this.items.push({ name, price });
  },

  removeItem(name) {
    this.items = this.items.filter((item) => item.name !== name);
  },

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  },
};

shoppingCart.addItem("Apple", 1.5);
shoppingCart.addItem("Banana", 1);
shoppingCart.addItem("Orange", 2);
console.log(shoppingCart.items);
// [{ name: 'Apple', price: 1.5 }, { name: 'Banana', price: 1 }, { name: 'Orange', price: 2 }]

shoppingCart.removeItem("Banana");
console.log(shoppingCart.items);
// [{ name: 'Apple', price: 1.5 }, { name: 'Orange', price: 2 }]

console.log(shoppingCart.getTotalPrice()); // 3.5
