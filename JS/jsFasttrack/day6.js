

// function increment(){
     
//   let  count =0;
//     return function(){
//         count++;
//         return count;
//     }
// }


// const x = increment();
// const y = increment();

// console.log(x());
// console.log(x());
// console.log(x());


// console.log(y());
// console.log(y());

// console.log(x());
// console.log(x());


function createCounter(stepsize, initial){
    return function(){
        initial = stepsize+initial;
        return initial;
    }
}

const g = createCounter(2,0);
const s = createCounter(3,0);

console.log(g());
console.log(g());
console.log(g());
console.log(g());
console.log(g());


console.log(s());
console.log(s());
console.log(s());
console.log(s());
console.log(s());