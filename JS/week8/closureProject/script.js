// --------------------------------------WITH CLOSURE-----------------------------------------------
const input = document.getElementById('input');
const create = document.getElementById('create-btn');
const two = document.querySelector('.two');
const generate = document.getElementById('generate-hex');

generate.addEventListener('click',()=>{
   
    
    let hex = "#";
    let str = "0123456789ABCEEF"
    for(let i =0;i<6;i++){
        let random = Math.random();
        hex+= str[Math.floor(random*16)];
    }
    input.value = hex;
    

})

create.addEventListener('click', () => {
    let val = input.value.trim();

    if (val === "") {
        alert("Please enter input first");
        return;
    }

    if (two.classList.contains('hidden')) {
        two.classList.remove('hidden');
    }

    input.value = "";

   
    let createBtn = (function (color) {  
        return function () {
            let btn = document.createElement('button');
            btn.classList.add('two-btn');
            btn.innerText = color;  
            btn.style.backgroundColor = color;
            btn.style.color = "white";  
            two.appendChild(btn);

            btn.addEventListener('click', function () {
                document.body.style.backgroundColor = color;
            });
        };
    })(val);  

    createBtn(); 
});















//------------------------------------------WITHOUT CLOSURE--------------------------------------------------
// const input = document.getElementById('input');
// const create = document.getElementById('create-btn');
// const two = document.getElementsByClassName('two')[0];

// create.addEventListener('click', function(e){
//    e.preventDefault()

//    let val = input.value.trim();
//    if(val===""){
//     alert("Please enter input first");

//    }else{

//     if(two.classList.contains('hidden')){
//         two.classList.remove('hidden');
//     }

//         let btn = document.createElement('button');
//         btn.classList.add('two-btn');
//         btn.innerText = val;
//         input.value=""
//         btn.style.backgroundColor = btn.innerText;
        
//         two.appendChild(btn);

//         btn.addEventListener('click',()=>{
//             document.body.style.backgroundColor = btn.innerText;
//         });
        
        
//    }
    
// })




