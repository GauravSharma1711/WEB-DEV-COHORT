

// let arr = [1,2,3,4,5,6,7,8,9,10];

// // console.log(arr[-1]);
// // undefined


// // PROXY CONCEPT
// // THE PROXY OBJECT ENABLE YOU TO CREATE A PROXY FOR ANOTHER OBJECT,
// // WHICH CAN INTERCEPT AND REDEFINE FUNDAMENTAL OPERATIONS FOR THAT OBJECT



// const user = {
//     name: "Gaurav",
//     age: 23,
//     password: "123"
// };

// const proxyUser = new Proxy(user, {
//     get(target, prop) {
//         // console.log("Target object:", target);  // Logs the original object
//         // console.log("Accessed property:", prop); // Logs the property being accessed

//         if(prop==='password'){
//             throw new Error("Access Denied");
//         }

//         return target[prop];
//     },
//     set(target,prop,value){  
//     }
// });

// Testing property access
// console.log(proxyUser.password);


