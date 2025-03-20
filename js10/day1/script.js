

function updateClock(){


    const timeElement = document.getElementById("time");
    const  dateElement = document.getElementById("date");
    
    const date = new Date();
   
    
    
     let hour  = date.getHours();
     let min  = date.getMinutes();
     let sec  = date.getSeconds();

     const amPm = hour>=12?"PM":"AM";
         hour = hour%12||12;

     min = min<10 ? `0${min}`: min;
     sec = sec<10 ? `0${sec}`: sec;
    
     const formattedDate = date.toLocaleDateString("en-GB", {
        day: "numeric",
        weekday:"long",
        month: "long",
        year: "numeric"
      });
      
    

    
    
  timeElement.innerText = `${hour}:${min}:${sec}:${amPm}`
    dateElement.innerText = formattedDate;
      
    
      }
    
      updateClock();
      setInterval(updateClock, 1000);
    
    
      // clearInterval and clearTimeOut can be used interchangeably
    
    