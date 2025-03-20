
const x = document.getElementById('billAmount');
const y = document.getElementById('tipPercentage');
const z    = document.getElementById('numPeople');


const calculateButton = document.getElementById('calculateButton');
const totalTip = document.getElementById('totalTip');
const tipPerPerson = document.getElementById('tipPerPerson');



calculateButton.addEventListener('click',()=>{

    const billAmount  =  x.value;
const tipPercentage  = y.value;
const numPeople   = z.value;


    if(!billAmount || !tipPercentage || !numPeople){
        alert("All fields are required")
        return;
    }

    const bill =  parseFloat(x.value);
    const tip  = parseFloat(y.value);
    const people   = parseInt(z.value,10);

    if(isNaN(bill) || isNaN(tip) || isNaN(people) || people <= 0){
        alert("Please enter valid numbers");
        return;
    }

  let  totalTipamount = (tip*bill)/100;
  let  tipamounteach  = totalTipamount/people;

    totalTip.innerText= `Total Tip: $${totalTipamount.toFixed(2)}`;
   tipPerPerson.innerText= `Tip Per Person : $${tipamounteach.toFixed(2)}`;


})

