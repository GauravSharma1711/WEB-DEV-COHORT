

//DEBOUNCE
function pataNhi(fn,delay){
    let myId;
    return function(...args){

        clearTimeout(myId);

 myId =  setTimeout(() => {
       fn.apply(this,args)
 }, delay);
    };
}

function greet(name){
    console.log(`hello ${name}`);
    
}


const a = pataNhi(()=>greet("gaurav"),3000)
a()
a()
a()