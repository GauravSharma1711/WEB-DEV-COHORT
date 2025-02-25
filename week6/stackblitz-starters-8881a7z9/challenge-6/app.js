function updateClock(){
const hand = document.getElementsByClassName('hand');

const hour = document.querySelector('.hour');
const min = document.querySelector('.minute');
const sec = document.querySelector('.second');

const digitalClock = document.querySelector('.digital-clock'); // Fix here
const date = document.querySelector('.date');

const now = new Date();





const h = now.getHours() % 12 || 12;
const m = now.getMinutes().toString().padStart(2, "0");
const s = now.getSeconds().toString().padStart(2, "0");

const hourDeg = (h % 12) * 30 + m * 0.5; // 360° / 12 hours = 30° per hour
const minuteDeg = m * 6; // 360° / 60 minutes = 6° per minute
const secondDeg = s * 6; // 360° / 60 seconds = 6° per second

// Apply rotation
hour.style.transform = `rotate(${hourDeg}deg)`;
min.style.transform = `rotate(${minuteDeg}deg)`;
sec.style.transform = `rotate(${secondDeg}deg)`;


    digitalClock.innerText = `${h}:${m}:${s}`;

  
    date.innerText =  (now.toLocaleDateString("en-GB",{
        day:"2-digit",
        month:"short",
        year:"numeric"
    }));
    
}

setInterval(() => {
    updateClock()
}, 1000);