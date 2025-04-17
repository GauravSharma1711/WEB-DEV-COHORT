//proxy concept (negative indexing question)

// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr[-1]);->undefined 



// const user = {
//     name:"gaurav",
//     age:"23",
//     password:"123"
// }
// const proxy = new Proxy(user,{
//   get(target,prop){
//    if(prop==='password'){
//     throw new Error("acces denied")
//    }
//     return target[prop]
//   }
// set(target,prop,user){}
// });
// console.log(proxy.password);




let arr = [1,2,3,4,5,6,7,8,9,10];

function negativeIndex(arr){
    return new Proxy(arr, {
        get(target, prop) {
            const idx = Number(prop);
            if (idx < 0) {
                return target[target.length + idx];
            }
            return target[idx];
        },
        set(target, prop, value) {
            const idx = Number(prop);
            if (idx < 0) {
                target[target.length + idx] = value;
            } else {
                target[idx] = value;
            }
            return true;
        }
    });
}

let newArr = negativeIndex(arr);


console.log(arr[-1]); 

// ✅ This works
console.log(newArr[-1]);

newArr[-1] = 99;

console.log(newArr); 
console.log(arr);   
//original array also gets manipulated
// (as arr is stored in heap and target stores the address of original array)
// to prevent this u can pass arr as [...arr] in function 