
const x = document.getElementById('number1');
const y = document.getElementById('number2');
const result = document.getElementById('result');



const ans =0 ;

function calculate(operator){


    const num1 = parseInt(x.value);
    const num2 = parseInt(y.value);


    if(isNaN(num1)|| isNaN(num2)){
        result.innerText= "Please enter a valid number"
        return;
    }

    switch(operator){
        case'+':
            result.innerText = `sum : ${num1+num2}`
        
        break
        case'-':
         result.innerText = `sub : ${num1-num2}`
        break
        case'*':
         result.innerText = `multi : ${num1*num2}`
        break
        case'/':
        if(num2===0){
             result.innerText = "Cannot divide by zero"
        }else{
            result.innerText = `div : ${num1/num2}`
        }
        break
        default:{
             result.innerText = "Invalid operator"
        }
    
    }
}

// EVAL- HINT