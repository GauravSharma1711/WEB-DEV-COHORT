const textInput = document.getElementById('textInput')
const charCount = document.getElementById('charCount');
const warningMessage = document.getElementById('warningMessage');
const unique = document.getElementById('unique');


const limit = 200;
textInput.addEventListener('input',()=>{
    let count =textInput.value.length;
    
    charCount.innerText = `${count}/200 characters`

   const val = textInput.value.trim();
   const arr = val.split(/\s+/);

   const mySet = new Set(arr);

  
  unique.innerText = `Unique words ar ${mySet.size}`
   
   
   

   
    if(count>limit){
        warningMessage.innerText = "You exceded the character Limit"
        warningMessage.style.color = "red"
    }
    
    
})


