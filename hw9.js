// 1) Create a Car class with properties make, model, and year, then make instance of electric car which have battery level

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}
class ElectricCar extends Car {
  constructor(batteryLevel) {
    this.batteryLevel = batteryLevel;
    super(make, model, year);
  }
}

// 2) Create a Library class that stores a list of books (as an array) which have following methods addBook(), removeBook(), listBooks()
class listBooks {
  books = [];

  addBook(book) {
    this.books.push(book);
  }
  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
    }
  }

  listBooks() {
    return this.books;
  }
}
const myBookList = new listBooks();
myBookList.addBook("The Great Gatsby");
myBookList.addBook("1984");
myBookList.removeBook("1984");

console.log(myBookList.listBooks());

// 3) Create a class Employee with a method calculateSalary() that calculates salary based on hours worked and hourly rate.

class Employee {
  hours = 0;
  rate = 0;

  calculateSalary() {
    return this.hours * this.rate;
  }
}
const employee = new Employee();
employee.hours = 40; // Set hours worked
employee.rate = 25; // Set hourly rate
console.log(employee.calculateSalary()); // Output: 1000

// 4) Create a class ShoppingCart that holds a list of items. methods, addItem(), deleteItem(), updateItem(), calculateTotal()
class ShoppingCart {
  itemsList = [];

  addItem(item) {
    this.itemsList.push(item);
  }

  deleteItem(itemName) {
    this.itemsList = this.itemsList.filter((item) => item.name !== itemName);
  }

  updateItem(itemName, newItem) {
    this.itemsList = this.itemsList.map((item) =>
      item.name === itemName ? newItem : item
    );
  }

  calculateTotal() {
    return this.itemsList.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
const cart = new ShoppingCart();
cart.addItem({ name: "Apple", price: 1, quantity: 5 });
cart.addItem({ name: "Banana", price: 0.5, quantity: 10 });

console.log(cart.calculateTotal()); // Output: 10

// 5)  Create a CarFactory class that have following methods, addCar, deleteCar, updateCar, getAllCars

class CarFactory {
  listCar = [];
  addCar(car) {
    this.listCar.push(car);
  }
  deleteCar(carName) {
    this.listCar = this.listCar.filter((car) => car.name !== carName);
  }
  updateCar(carName, newCar) {
    this.listCar = this.listCar.map((car) =>
      car.name === carName ? newCar : car
    );
  }
  getAllCars() {
    return this.listCar;
  }

  calculateTotal() {
    return this.listCar.reduce(
      (total, car) => total + car.price * car.quantity,
      0
    );
  }
}
const carFactory = new CarFactory();
carFactory.addCar({ name: "dodge", price: 10, quantity: 5 });
carFactory.addCar({ name: "BMW", price: 5, quantity: 5 });
carFactory.deleteCar("dodge");

console.log(carFactory.getAllCars());
console.log(carFactory.calculateTotal());
