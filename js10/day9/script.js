 const  change  = document.getElementById('change');

 //uing hex
//  change.addEventListener('click',()=>{

//     const limit = "0123456789abcdef";

//     let hexcode = "#";

  
    
//     for(let i =0 ; i<6;i++){
//         const randomidx = Math.floor(Math.random()*15);
//         hexcode+=limit.charAt(randomidx);
//     }

// document.body.style.backgroundColor = hexcode;


//  })

//uding RGB
change.addEventListener('click',()=>{
    const red = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)

    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
})