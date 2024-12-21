
function calculate() {
    const num1 = parseFloat(prompt("Enter first number: "));
    
    const num2 = parseFloat(prompt("Enter second number: "));
    
    const operation = prompt("Enter an operation (+, -, *, /): ");
    
    let result;

    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error: Division by zero is not allowed.";
        }
    } else {
        result = "Invalid operation.";
    }

    console.log(`Result: ${result}`);
}

calculate();
