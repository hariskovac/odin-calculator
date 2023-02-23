const screen = document.querySelector(".screen");
const digits = document.querySelectorAll(".digit"); 
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal");
const sign = document.querySelector(".sign");
const percent = document.querySelector(".percent");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");

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
percent.addEventListener("click", toPercent);
clear.addEventListener("click", clearCalc);
equals.addEventListener("click", evaluate);

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
  if (operator === "" && !num1.toString().includes(".")) {
    num1 += ".";
  } else if (operator !== "" && !num2.toString().includes(".")) {
    num2 += ".";
  }
  screen.textContent = num1 + operator + num2;
}

function changeSign() {
  if (operator === "") {
    if (num1 !== "") {
      num1 = -1 * parseFloat(num1);
    }
  } else {
    if (num2 !== "") {
      num2 = -1 * parseFloat(num2);
    }
  }
  screen.textContent = num1 + operator + num2;
}

function toPercent() {
  if (operator === "") {
    if (num1 !== "") {
      num1 = parseFloat(num1) / 100;
    }
  } else {
    if (num2 !== "") {
      num2 = parseFloat(num2) / 100;
    }
  }
  screen.textContent = num1 + operator + num2;
}

function clearCalc() {
  num1 = "";
  num2 = "";
  operator = "";
  screen.textContent = num1 + operator + num2;
}

function evaluate() {
  if (num1 !== "" && num2 !== "" && operator !== "") {
    screen.textContent = operate(operator, parseFloat(num1), parseFloat(num2));
  }
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