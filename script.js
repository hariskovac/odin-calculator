const screen = document.querySelector(".screen");
const digits = document.querySelectorAll(".digit"); 
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal");
const sign = document.querySelector(".sign");

let num1 = "";
let num2 = "";
let operator = "";

digits.forEach((digit) => {
  digit.addEventListener("click", calculate); 
});

operators.forEach((operator) => {
  operator.addEventListener("click", calculate);
})

decimal.addEventListener("click", addDecimal);
sign.addEventListener("click", changeSign);

function calculate(e) {
  if (e.target.classList.contains("digit")) {
    if (operator === "") {
      num1 += e.target.textContent;
    } else {
      num2 += e.target.textContent;  
    }
    screen.textContent = num1 + operator + num2;
  }

  if (e.target.classList.contains("operator")) {
    if (num1 === "") {
      num1 = 0;
      screen.textContent = num1 + operator + num2;
    } else if (num2 === "") {
      operator = e.target.textContent;
      screen.textContent = num1 + operator + num2;
    } else {
      screen.textContent = operate(operator, parseFloat(num1), parseFloat(num2));
      operator = e.target.textContent;
      screen.textContent = num1 + operator + num2;
    }
  }
}

function addDecimal() {
  if (operator === "" && !num1.includes(".")) {
    num1 += ".";
  } else if (operator !== "" && !num2.includes(".")) {
    num2 += ".";
  }
  screen.textContent = num1 + operator + num2;
}

function changeSign() {
  if (operator === "") {
    num1 = -1 * parseFloat(num1);
  } else {
    num2 = -1 * parseFloat(num2);
  }
  screen.textContent = num1 + operator + num2;
}

function add(x, y) {
  num1 = x + y;
  num2 = "";
  return num1;
}

function subtract(x, y) {
  num1 = x - y;
  num2 = "";
  return num1;
}

function multiply(x, y) {
  num1 = x * y;
  num2 = "";
  return num1;
}

function divide(x, y) {
  num1 = x / y;
  num2 = "";
  return num1;
}

function operate(operator, x, y) {
  switch (operator) {
    case " + ":
      return add(x, y);
    
    case " - ":
      return subtract(x, y);

    case " \u00D7 ":
      return multiply(x, y);

    case " / ":
      return divide(x, y);
      
    default:
      break;
  }
}