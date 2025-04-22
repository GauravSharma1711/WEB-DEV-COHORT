
//DEBOUNCE
function pataNhi(fn,delay){
    let myId;
    // console.log(arguments);
 
    
    
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



//THROTLING
// const patanhi = (fn,delay)=>{

//     let myId = null;

//     return (...args)=>{

//         if(myId===null){
//             fn(...args);

// myId = setTimeout(() => {
//     myId=null
// }, delay);

// }
//         }
// }
// patanhi()
// patanhi()
// patanhi()

