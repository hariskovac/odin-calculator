let num1 = "";
let num2 = "";
let operator = "";

const calcDisplay = document.querySelector(".screen");
const digitBtns = document.querySelectorAll(".digit"); 
const operatorBtns = document.querySelectorAll(".operator");
const decimalBtn = document.querySelector(".decimal");
const signBtn = document.querySelector(".sign");
const percentBtn = document.querySelector(".percent");
const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector(".equals");
const delBtn = document.querySelector(".del");

digitBtns.forEach((digit) => {
  digit.addEventListener("click", calculate); 
});

operatorBtns.forEach((operator) => {
  operator.addEventListener("click", calculate);
})

window.addEventListener("keydown", keyboardInput);
decimalBtn.addEventListener("click", addDecimal);
signBtn.addEventListener("click", changeSign);
percentBtn.addEventListener("click", toPercent);
clearBtn.addEventListener("click", clearCalc);
equalsBtn.addEventListener("click", evaluate);
delBtn.addEventListener("click", deleteLast);

function keyboardInput(e) {
  if (e.code === "Equal") evaluate();
  if (e.code === "NumpadDecimal" || e.code === "Period") addDecimal();
  if (e.code === "Backspace" || e.code === "Delete") deleteLast();
}

function calculate(e) {
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
    } else if (num2 !== "") {
      calcDisplay.textContent = operate(operator, parseFloat(num1), parseFloat(num2));
    } 
    operator = e.target.textContent;
  }
  calcDisplay.textContent = num1 + operator + num2;
}

function addDecimal() {
  if (operator === "" && !num1.toString().includes(".")) {
    num1 += ".";
  } else if (operator !== "" && !num2.toString().includes(".")) {
    num2 += ".";
  }
  calcDisplay.textContent = num1 + operator + num2;
}

function changeSign() {
  if (operator === "") {
    if (num1 !== "" && num1 !== ".") {
      num1 = -1 * parseFloat(num1);
    }
  } else {
    if (num2 !== "" && num2 !== ".") {
      num2 = -1 * parseFloat(num2);
    }
  }
  calcDisplay.textContent = num1 + operator + num2;
}

function toPercent() {
  if (operator === "") {
    if (num1 !== "") {
      num1 = round(parseFloat(num1) / 100);
    }
  } else {
    if (num2 !== "") {
      num2 = round(parseFloat(num2) / 100);
    }
  }
  calcDisplay.textContent = num1 + operator + num2;
}

function clearCalc() {
  num1 = "";
  num2 = "";
  operator = "";
  calcDisplay.textContent = num1 + operator + num2;
}

function evaluate() {
  if (num1 !== "" && num2 !== "" && operator !== "") {
    calcDisplay.textContent = operate(operator, parseFloat(num1), parseFloat(num2));
  }
}


function deleteLast() {
  if (num2 !== "") {
    num2 = num2.toString().slice(0, -1);
  } else if (num2 === "" && operator !== "") {
    operator = "";
  } else {
    num1 = num1.toString().slice(0, -1);
  }
  calcDisplay.textContent = num1 + operator + num2;
}

function add(x, y) {
  num1 = round(x + y);
  num2 = "";
  operator = "";
  return num1;
}

function subtract(x, y) {
  num1 = round(x - y);
  num2 = "";
  operator = "";
  return num1;
}

function multiply(x, y) {
  num1 = round(x * y);
  num2 = "";
  operator = "";
  return num1;
}

function divide(x, y) {
  if (y !== 0) {
    num1 = round(x / y);
    num2 = "";
    operator = "";
    return num1;
  } else {
    num1 = "";
    num2 = "";
    operator = "";
    return "Cannot divide by 0";
  }
}

function round(num) {
  return Math.round((num) * 100000000) / 100000000;
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