
const time = document.getElementById('timeinput');
const startbtn = document.getElementById('startbtn');
const countdowndisplay = document.getElementById('countdowndisplay');
const  pause = document.getElementById('pause');
const  resume = document.getElementById('resume');

let id;
let val ;

startbtn.addEventListener('click',()=>{
     val = parseInt(time.value);
     if(isNaN(val)){
        countdowndisplay.textContent = "Enter a valid number"
        return;
     }
     if(val<=0){
         countdowndisplay.textContent = "Please enter val > 0"
         return;
     }

     time.value= "";
 countdowndisplay.innerText=val;
 clearInterval(id);
  id = setInterval( funtimer , 1000);

  pause.classList.remove('hidden');
    
})

function funtimer(){
    val--;
countdowndisplay.innerText  = val;
if(val<0){
    clearInterval(id);
    countdowndisplay.innerText= null
    
    resume.classList.add('hidden')
    pause.classList.add('hidden');
};
}


pause.addEventListener('click',()=>{
    clearInterval(id);
    resume.classList.remove('hidden')
    pause.classList.add('hidden');
})

resume.addEventListener('click',()=>{
        clearInterval(id);
  id =   setInterval(funtimer,1000);


    resume.classList.add('hidden')
    pause.classList.remove('hidden');
})