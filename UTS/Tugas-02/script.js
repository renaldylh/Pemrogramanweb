function calculator(num1, num2, operator) {
  let hasil;

  switch (operator) {
    case "+":
      hasil = num1 + num2;
      break;
    case "-":
      hasil = num1 - num2;
      break;
    case "*":
      hasil = num1 * num2;
      break;
    case "/":
      hasil = num1 / num2;
      break;
    default:
      return "Error: Operator tidak valid";
      break;
  }

  return hasil;
}

console.log(calculator(3, 4, "*"));
console.log(calculator(3, 4, "&"));
