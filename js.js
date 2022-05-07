const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const multiply = function(num1, num2) {
  return num1*num2;
};

const divide = function(num1,num2){
    return num1/num2;
};

const operate = function(operator, num1, num2)
{
    switch(operator){
        case "+":
            return add(num1,num2);
            break;
        case "-":
            return subtract(num1,num2);
            break;
        case "*":
            return multiply(num1,num2);
            break;
        case "/":
            return divide(num1,num2);
            break;
        default:
            return "invalid operator";
    }
};

const display = document.querySelector('.results');
display.textContent = 0;

let firstOperand = 0;
let secondOperand = 0;
let operation = "";

const numbers = document.querySelectorAll('.number');
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        if(display.textContent == 0 || display.textContent == firstOperand)
        {
            display.textContent = "";
        }
        switch(button.textContent){
            case "0":
                display.textContent +=0;
                break;
            case "1":
                display.textContent +=1;
                break;
            case "2":
                display.textContent +=2;
                break;
            case "3":
                display.textContent +=3;
                break;
            case "4":
                display.textContent +=4;
                break;
            case "5":
                display.textContent +=5;
                break;
            case "6":
                display.textContent +=6;
                break;
            case "7":
                display.textContent +=7;
                break;
            case "8":
                display.textContent +=8;
                break;
            case "9":
                display.textContent +=9;
                break;
            case ".":
                display.textContent +=".";
                break;
            default:
                break;
        }
    });
});

const operations = document.querySelectorAll('.operator');
operations.forEach((button) => {
    button.addEventListener('click', () => {
        if(firstOperand != 0 && operation == "")
        {
            operation = button.textContent;
        }
        else if(firstOperand != 0)
        {
            secondOperand = display.textContent;
            if(operation == "+")
            {
               firstOperand = operate(operation, +firstOperand, +secondOperand);
            }
            else
            {
                firstOperand = parseFloat(operate(operation, firstOperand, secondOperand).toFixed(8));
            }
            display.textContent = firstOperand;
            operation = button.textContent;
            secondOperand =0;
        }
        else
        {
            operation = button.textContent;
            firstOperand = display.textContent;
        }
    });
});

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    if(operation == "")
    {
    }
    else
    {
        secondOperand = display.textContent;
        if(operation == "+")
        {
            display.textContent = operate(operation, +firstOperand, +secondOperand);
        }
        else
        {
            display.textContent = parseFloat(operate(operation, firstOperand, secondOperand).toFixed(8));
        }
        firstOperand = display.textContent;
        operation = "";
        secondOperand = 0;
    }
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    firstOperand = secondOperand = 0;
    operation = "";
    display.textContent = 0;
});

const signs = document.querySelector('.sign');
signs.addEventListener('click', () => {
    let negative = display.textContent.search("-");
    if(negative == -1)
    {
        display.textContent = "-" + display.textContent;
    }
    else
    {
        display.textContent = display.textContent.slice(1);
    }
});

const percent = document.querySelector('.percent');
percent.addEventListener('click', () => {
    display.textContent = parseFloat(operate("/", display.textContent, 100).toFixed(8));
});