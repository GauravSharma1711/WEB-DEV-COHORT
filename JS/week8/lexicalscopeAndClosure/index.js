// counter 

function increment(){
    let count = 0 ;

    return function(){
        count++;
        return count;
    }

}

const x = increment();
const y = increment();

console.log(x());
console.log(x());
console.log(x());
console.log(x());

console.log(y());
console.log(y());
console.log(y());
console.log(y());




