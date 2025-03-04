const input = document.getElementById('input');

const allclear = document.getElementById('ac');
const del = document.getElementById('del');
const equal = document.getElementById('equal');

// const plus = document.getElementById('plus')
// const minus = document.getElementById('minus')
// const div = document.getElementById('div')
// const multi  = document.getElementById('multi')

const buttons = document.querySelectorAll('.btn'); 
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerHTML);
        input.value+=button.innerHTML
    });
});

allclear.addEventListener('click' , function(){
    result =0;
    input.value="";
})
del.addEventListener('click',function(){
    input.value = input.value.slice(0,-1);
    console.log(input.value);
    
})

equal.addEventListener('click', function () {
    try {
       
        input.value = eval(input.value);
    } catch (error) {
       
        input.value = "Error";
    }
});