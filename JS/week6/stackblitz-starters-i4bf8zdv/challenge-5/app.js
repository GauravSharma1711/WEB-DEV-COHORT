/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];


const carouselTrack = document.getElementById('carouselTrack');
const caption = document.getElementById('caption');

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

const carouselNav = document.getElementById('carouselNav');
const autoPlayButton = document.getElementById('autoPlayButton');

const timerDisplay = document.getElementById('timerDisplay');

let i = 0 ;

let indicator = [];

function carouselnavfun(){
  images.forEach((e)=>{
    let div = document.createElement('div');
    div.classList.add('carousel-indicator')
    carouselNav.appendChild(div);
    indicator.push(div);
  })

  indicator[i].classList.add('active');
}

function updateIndicator(cur , next){
  indicator[cur].classList.remove('active');
  indicator[next].classList.add('active');
}


carouselnavfun(i)
updatecarousel(i);



function updatecarousel(idx){
  const imgdiv = document.createElement('div');
  const img = document.createElement('img');
  img.src = images[idx].url;
  imgdiv.append(img);
  carouselTrack.appendChild(imgdiv)
  
  const div = document.createElement('div');
  div.innerText = images[idx].caption;
  caption.appendChild(div)
}

prevButton.addEventListener('click',()=>{
  if(i>0){
    carouselTrack.lastChild?.remove();
caption.lastChild?.remove();
let j =i;
updateIndicator(j,j-1);
i--;
updatecarousel(i);
  }else{
    carouselTrack.lastChild?.remove(); 
    caption.lastChild?.remove();
    let j =i;
    updateIndicator(j,images.length-1)
    i=images.length-1;
    updatecarousel(i);
  }
})

nextButton.addEventListener('click',()=>{
  if(i<images.length-1){
    carouselTrack.lastChild?.remove(); 
caption.lastChild?.remove();
let j =i;
updateIndicator(j,j+1)
i++;
updatecarousel(i);
  }else{
    carouselTrack.lastChild?.remove(); 
    caption.lastChild?.remove();
    let j =i;
updateIndicator(j,0)
    i=0;
    updatecarousel(i);
  }
})


let autoplayinterval = null;

autoPlayButton.addEventListener('click',()=>{
  if(!autoplayinterval){
    autoPlayButton.innerText = "Stop Auto Play";
    let j = 5;

    autoplayinterval = setInterval(() => {
      timerDisplay.innerText = `Next slide in ${j}s`;
      j--;

      if(j<0){
        j=5;
       
        if(i<images.length-1){
          carouselTrack.lastChild?.remove(); 
      caption.lastChild?.remove();
      let k =i;
      updateIndicator(k,k+1)
      i++;
      updatecarousel(i);
        }else{
          carouselTrack.lastChild?.remove(); 
          caption.lastChild?.remove();
          let k =i;
      updateIndicator(k,0)
          i=0;
          updatecarousel(i);
        }



      }

    }, 1000);
  }else{
    clearInterval(autoplayinterval);
    autoplayinterval = null;
    autoPlayButton.innerText = "Start Auto Play";
    timerDisplay.innerText = ""; 
  }
})