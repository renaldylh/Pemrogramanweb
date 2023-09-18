function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const operator = document.getElementById("operator").value;
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultElement = document.getElementById("result");
  
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
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          resultElement.textContent = "Error: Pembagian dengan nol tidak diperbolehkan";
          return;
        }
        break;
      default:
        resultElement.textContent = "Error: Operator tidak valid";
        return;
    }
  
    resultElement.textContent = `Hasil: ${result}`;
  }
  