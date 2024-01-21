
    document.addEventListener('DOMContentLoaded', function() {
      const display = document.getElementById('desaplay'); 
      const buttons = document.querySelectorAll('.numbers, .operation, .egale, .claers,.plus');
  
      let currentInput = '';
  
      buttons.forEach(button => {
        button.addEventListener('click', function() {
          const buttonText = this.innerText;
  
          if (buttonText === 'AC') {
            clearDisplay();
          } else if (buttonText === '=') {
            evaluateExpression();
          } else {
            updateDisplay(buttonText);
          }
        });
      });
  
      function updateDisplay(value) {
        currentInput += value;
        display.value = currentInput;
      }
  
      function clearDisplay() {
        currentInput = '';
        display.value = '';
      }
  
      function evaluateExpression() {
        try {
          const result = eval(currentInput);
          display.value = result;
          currentInput = result.toString();
        } catch (error) {
          display.value = 'Erreur';
          currentInput = '';
        }
      }
    });
