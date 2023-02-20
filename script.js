const screen = document.querySelector(".screen");
const digits = document.querySelectorAll(".digit"); 
const operators = document.querySelectorAll(".operator");

let num1 = "";
let num2 = "";
let operator = "";

digits.forEach((digit) => {
  digit.addEventListener("click", updateScreen); 
});

operators.forEach((operator) => {
  operator.addEventListener("click", updateScreen);
})

function updateScreen(e) {
  if (e.target.classList.contains("digit")) {
    if (operator === "") {
      num1 += e.target.textContent;
    } else {
      num2 += e.target.textContent;  
    }
  }

  if (e.target.classList.contains("operator")) {
    if (num1 === "") {
      num1 = 0;
    } else if (num2 === "") {
      operator = e.target.textContent;
    } else {
      operate(operator, parseInt(num1), parseInt(num2));
    }
  }

  screen.textContent = num1 + operator + num2;
}

function add(x, y) {
  console.log(x + y);
  return x + y;
}

function subtract(x, y) {
  console.log(x - y);
  return x - y;
}

function multiply(x, y) {
  console.log(x * y);
  return x * y;
}

function divide(x, y) {
  console.log(x / y);
  return x / y;
}

function operate(operator, x, y) {
  switch (operator) {
    case " + ":
      add(x, y);
      break;
    
    case " - ":
      subtract(x, y);
      break;

    case " \u00D7 ":
      multiply(x, y);
      break;

    case " / ":
      divide(x, y);
      break;
      
    default:
      break;
  }
}