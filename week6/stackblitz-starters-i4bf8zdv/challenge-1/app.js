/**
 * Write your challenge solution here
 */

const btn = document.getElementById('toggleButton');
const state = document.getElementById('status');
const bulb = document.getElementById('bulb');
const body = document.getElementById('body');
const off = document.getElementsByClassName("off");

btn.addEventListener('click',()=>{
    if(bulb.classList.contains("off")){
        bulb.classList.remove("off");
        body.classList.add("dark-mode");
        state.innerText = "Status: On";
        btn.innerText = "Turn Off";
}else{
    bulb.classList.add("off");
    body.classList.remove("dark-mode");
    state.innerText = "Status: Off";
    btn.innerText = "Turn On";
}
})