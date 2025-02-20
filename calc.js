let currentColor = "yellow";
const color = document.getElementById("color");
const submit = document.getElementById("submit");
let message = document.getElementById("message");
let calculator = document.getElementById("calculator");
let display = document.getElementById("calc-display");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isOperatorSelected = false;

// Color Change Event
color.addEventListener("click", () => {
    const allColor = ["red", "blue", "green", "yellow", "brown", "orange", "pink", "white"];
    let chooseColorIndex = Math.floor(Math.random() * allColor.length);
    currentColor = allColor[chooseColorIndex];
    document.body.style.backgroundColor = currentColor;
});
 
// Submit Button Event (Check Password)
submit.addEventListener("click", () => {
    if (currentColor === "green") {
        message.textContent = "✅ Congratulations! You are authorized! Below is the calculator:";
				calculator.style.display = "block"; 
// Show calculator
    } else {
        message.textContent = "❌ Try again!";
        calculator.style.display = "none"; // Keep calculator hidden
    }
});

// Calculator Functions
function appendNumber(number) {
    if (!isOperatorSelected) {
        firstNumber += number;
        display.textContent = firstNumber;
    } else {
        secondNumber += number;
        display.textContent = secondNumber;
    }
}

function setOperator(op) {
    if (firstNumber === "") return; // Prevent setting an operator before a number
    isOperatorSelected = true;
    operator = op;
}

function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    isOperatorSelected = false;
    display.textContent = "0";
}

function calculateResult() {
    if (firstNumber === "" || secondNumber === "") return; // Prevent empty calculations
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Error";
            break;
        default:
            result = "Error";
    }

    display.textContent = result;
    firstNumber = result.toString();
    secondNumber = "";
    isOperatorSelected = false;
}
