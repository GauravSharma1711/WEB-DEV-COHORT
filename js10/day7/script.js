  const inputText = document.getElementById('inputText');
  const checkButton = document.getElementById('checkButton')
  const resultMessage = document.getElementById('resultMessage');

  checkButton.addEventListener('click',()=>{
    const value = inputText.value.trim();

    if(value === ""){
        alert("Please Enter a word or phrase");
        return ;
    }

     const arr = value.split(" ");
     
     let cur = "";
     let rev = "";
      arr.forEach(element => {
      cur+=element
     });
  

     rev = cur.split("").reverse().join("");
    
     

     if(cur.toLocaleLowerCase()===rev.toLocaleLowerCase()){
      resultMessage.innerText = `${value} is a palindrome`
     }else{
       resultMessage.innerText = `${value} is not a palindrome`
     }
     

  })