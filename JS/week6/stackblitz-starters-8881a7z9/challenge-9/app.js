
const toggle = document.querySelector('.toggle-btn');

const panel = document.querySelector('.panel');

const closeBtn = document.querySelector('.close-btn');
const menuItem = document.querySelector('.menu-item');




closeBtn.addEventListener('click',()=>{
    panel.classList.remove('active');
})

let time;


toggle.addEventListener("mouseover", () => {
    panel.classList.add('active')

  });

  toggle.addEventListener("mouseout", () => {
   time = setTimeout(() => {
        panel.classList.remove('active')
    }, 1*1000);
  });

  panel.addEventListener("mouseover",()=>{
    clearTimeout(time);
  })

  panel.addEventListener("mouseout",()=>{
    time = setTimeout(() => {
        panel.classList.remove('active')
    }, 1*1000);
  })

