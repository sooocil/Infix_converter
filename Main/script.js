function isOperator(char) {
  return ["+", "-", "*", "/", "^"].includes(char);
}

function getPrecedence(operator) {
  switch (operator) {
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
      return 2;
    case "^":
      return 3;
    default:
      return 0;
  }
}

function infixToPostfix(expression) {
  let output = "";
  const stack = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (isOperator(char)) {
      while (
        stack.length > 0 &&
        isOperator(stack[stack.length - 1]) &&
        getPrecedence(char) <= getPrecedence(stack[stack.length - 1])
      ) {
        output += stack.pop();
      }

      stack.push(char);
    } else if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        output += stack.pop();
      }

      if (stack.length > 0 && stack[stack.length - 1] === "(") {
        stack.pop();
      }
    } else {
      output += char;
    }
  }

  while (stack.length > 0) {
    output += stack.pop();
  }

  return output;
}

let input = document.getElementById("input");
let convert = document.getElementById("convert");
const infixExpression = input.value;
let h2 = document.getElementById("h2");

// const infixExpression = "3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3";
const postfixExpression = infixToPostfix(infixExpression);

convert = () => {
  h2.innerHTML = "Postfix Expression : " + postfixExpression;
  console.log("Postfix expression:", postfixExpression);
};
console.log("Infix expression:", infixExpression);
