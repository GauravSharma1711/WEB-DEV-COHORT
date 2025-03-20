const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Opportunities don't happen, you create them. – Chris Grosser",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Act as if what you do makes a difference. It does. – William James",
    "Dream big and dare to fail. – Norman Vaughan"
  ];
  

  const quoteDisplay = document.getElementById('quoteDisplay');
  const generateButton = document.getElementById('generateButton');

const used = [];

  generateButton.addEventListener('click',()=>{

    const idx = Math.floor(Math.random()*quotes.length);

    if(used.includes(idx) && used.length == quotes.length){
        
    quoteDisplay.innerText =  "Generated all quotes";

}else if(used.includes(idx)){
    quoteDisplay.textContent = "Generate a fresh one!"

}

else{
    quoteDisplay.innerText = quotes[idx];
    used.push(idx);
}
    console.log(used);
    

  })
  
