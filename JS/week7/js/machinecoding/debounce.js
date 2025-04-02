
//DEBOUNCE
function nhiPata(fn,delay){
  let myId;

// console.log(arguments);
// [Arguments] { '0': 'gaurav', '1': 2 }
// arguments is an array-like object accessible inside functions 
// that contains the values of the arguments passed to that function.


   return function(...args){
    clearTimeout(myId);
  myId = setTimeout(() => {
        fn.apply(this,args);
    }, delay);
    //myId stores the reference of setTimeOut in memory
   }
} 

function greet(name){
    console.log(`hello ${name}`); 
}

const a = nhiPata(()=>greet("gaurav"),3000);

a();
a();
a();
a();

// output 
// hello gaurav
// hello gaurav
// hello gaurav
// hello gaurav


// ---------------------------------------------------------------------



