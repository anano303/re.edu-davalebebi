const { Command } = require("commander");
const fs = require("fs");
const path = "./expenses.json";
const program = new Command();

const loadExpenses = () => {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path);
    return JSON.parse(data);
  }
  return [];
};

const saveExpenses = (expenses) => {
  fs.writeFileSync(path, JSON.stringify(expenses, null, 2));
};

const generateId = () => Math.floor(Math.random() * 1000000);

// Create Command
program
  .command("create")
  .description("Create a new expense")
  .requiredOption("-c, --category <category>", "Expense category")
  .requiredOption("-p, --price <price>", "Expense price")
  .option("-d, --description <description>", "Expense description")
  .action((options) => {
    const { category, price, description } = options;
    if (Number(price) < 10) {
      console.error("Error: Minimum expense amount is 10.");
      return;
    }
    const expenses = loadExpenses();
    const expense = {
      id: generateId(),
      category,
      price: Number(price),
      description: description || "",
      date: new Date().toISOString(),
    };
    expenses.push(expense);
    saveExpenses(expenses);
    console.log("Expense added successfully:", expense);
  });

// Read (Show All) Command
program
  .command("show")
  .description("Show all expenses")
  .option("--asc", "Sort by date ascending")
  .option("--desc", "Sort by date descending")
  .action((options) => {
    const expenses = loadExpenses();
    if (options.asc) {
      expenses.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (options.desc) {
      expenses.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    console.log("All expenses:", expenses);
  });

// Read By ID Command
program
  .command("getById <id>")
  .description("Get expense by ID")
  .action((id) => {
    const expenses = loadExpenses();
    const expense = expenses.find((e) => e.id === Number(id));
    if (expense) {
      console.log("Expense found:", expense);
    } else {
      console.log("Expense not found");
    }
  });

// Update Command
program
  .command("update <id>")
  .description("Update an expense")
  .option("-c, --category <category>", "Expense category")
  .option("-p, --price <price>", "Expense price")
  .option("-d, --description <description>", "Expense description")
  .action((id, options) => {
    const expenses = loadExpenses();
    const expenseIndex = expenses.findIndex((e) => e.id === Number(id));
    if (expenseIndex === -1) {
      console.log("Expense not found");
      return;
    }
    const expense = expenses[expenseIndex];
    if (options.category) expense.category = options.category;
    if (options.price) {
      if (Number(options.price) < 10) {
        console.error("Error: Minimum expense amount is 10.");
        return;
      }
      expense.price = Number(options.price);
    }
    if (options.description) expense.description = options.description;
    saveExpenses(expenses);
    console.log("Expense updated successfully:", expense);
  });

// Delete Command
program
  .command("delete <id>")
  .description("Delete an expense")
  .action((id) => {
    let expenses = loadExpenses();
    const initialLength = expenses.length;
    expenses = expenses.filter((e) => e.id !== Number(id));
    if (expenses.length === initialLength) {
      console.log("Expense not found");
    } else {
      saveExpenses(expenses);
      console.log("Expense deleted successfully");
    }
  });

// Price Sorting Command
program
  .command("price")
  .description("Sort expenses by price")
  .option("--asc", "Sort by price ascending")
  .option("--desc", "Sort by price descending")
  .action((options) => {
    const expenses = loadExpenses();
    if (options.asc) {
      expenses.sort((a, b) => a.price - b.price);
    } else if (options.desc) {
      expenses.sort((a, b) => b.price - a.price);
    }
    console.log("Expenses sorted by price:", expenses);
  });

program.parse(process.argv);
