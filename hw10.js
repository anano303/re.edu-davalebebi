// 1) Write a function that receives 3 parameters:
// amount of money, dayLimit and weekLimit you
// should calculate how many days does it needs
// to withdway whole amount of money.

function calculateDays(amount, dayLimit, weekLimit) {
  let totalWithdrawn = 0;
  let days = 0;
  let weeklyTotal = 0;
  while (totalWithdrawn < amount) {
    const dailyWithdraw = Math.min(dayLimit, amount - totalWithdrawn);
    weeklyTotal += dailyWithdraw;
    totalWithdrawn += dailyWithdraw;
    days++;
    if (days % 7 === 0) {
      weeklyTotal = 0;
    }
    if (weeklyTotal >= weekLimit) {
      weeklyTotal = 0;
      days += 7 - (days % 7);
    }
  }
  return days;
}

// 2) Write a function that takes text as a parameter, the text should be: "What is a plus b?" or "What is a minus b?" you should write correct answer, if answer is correct console you're humar other wise consoled you're robot

function checkMathQuestion(question) {
  const match = question.match(/What is a (plus|minus) b\?/);
  if (!match) {
    console.log("Invalid question format");
    return;
  }

  const [_, operation] = match;
  const a = 5;
  const b = 3;
  const answer = operation === "plus" ? a + b : a - b;

  const userAnswer = parseInt(prompt(`${question} Answer:`), 10);
  if (userAnswer === answer) {
    console.log("You're human");
  } else {
    console.log("You're robot");
  }
}

// 3) write a function that takes 2 parameter the height and width you draw that rectangle with #
// eg: 2, 2 =>
// ##
// ##

// eg: 3:4
// ####
// ####
// ####

function drawRectangle(height, width) {
  const row = "#".repeat(width);
  for (let i = 0; i < height; i++) {
    console.log(row);
  }
}

// 4) write a function that takes number as a parameter and check is this number wide or not. * wide means that If the number of its digits is greater than the sum of the digits.
function isWide(number) {
  const digits = number.toString().split("").map(Number);
  const digitCount = digits.length;
  const digitSum = digits.reduce((acc, curr) => acc + curr, 0);

  return digitCount > digitSum;
}
