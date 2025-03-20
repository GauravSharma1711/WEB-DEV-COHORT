
const input =  document.getElementById('input');
const button = document.getElementById('btn');
const ans = document.getElementById('ans');

button.addEventListener('click',()=>{
    const expression = input.value.trim();
    if(expression=="" || expression==null){
        ans.innerText = "Please Enter valid input"
        return;
    }
    
    const val = eval(expression);
    ans.innerText= `Ans ${val}`;


})