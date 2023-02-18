const screen = document.querySelector(".screen");
const digits = document.querySelectorAll(".digit"); 
const operators = document.querySelectorAll(".operator");

let num1;
let num2;
let operator;

digits.forEach((digit) => {
  digit.addEventListener("click", updateScreen); 
});

operators.forEach((operator) => {
  operator.addEventListener("click", updateScreen);
})

function updateScreen(e) {
  if (screen.textContent == 0 && e.target.classList.contains("digit")) {
    screen.textContent = e.target.textContent;
  } else {
    screen.textContent += e.target.textContent;
  }
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(operator, x, y) {
  switch (operator) {
    case "+":
      add(x, y);
      break;
    
    case "-":
      subtract(x, y);
      break;

    case "*":
      multiply(x, y);
      break;

    case "/":
      divide(x, y);
      break;
      
    default:
      break;
  }
}