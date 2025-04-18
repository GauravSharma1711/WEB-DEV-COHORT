

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

pataNhi()
pataNhi()
pataNhi()
pataNhi()