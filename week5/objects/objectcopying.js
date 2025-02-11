

// ---------------------------PASS-BY-VALUE------------------------------------
// let name1 = "gaurav"
// let name2 = name1;

// console.log(name1);
// console.log(name2);

// name2 = "john";

// console.log(name1);
// console.log(name2);

// ------------------------------PASS BY REFERENCE--------------------------

// let obj1 = {
//   name : "Gaurav"
// }

// let obj2 = obj1;

// obj2.name="john";

// console.log(obj1.name);
// console.log(obj2.name);

// ----------------------------------SHALLLOW COPY------------------------------

// let obj1 = {
//     name:"Gaurav"
// }

// // using assign method
// let obj2 = Object.assign({},obj1)
// obj2.name = "john";
// console.log(obj1.name);
// console.log(obj2.name);

// // OR (Using spread operator)
// let obj3 = {
//     ...obj1
// }
// obj3.name = "sam"
// console.log(obj1.name);
// console.log(obj3.name);

// --------------------------SHALLOW COPY PROBLEM------------------------------------

// let obj1 = {
//     name:"Gaurav",
//     fullname:{
//         myfullname:"Gaurav Sharma"
//     }
// }
// let obj2 = {
//     ...obj1
// }

// obj2.name = "tony";
// console.log(obj1.name);
// console.log(obj2.name);

// obj2.fullname.myfullname = "tony stark"
// console.log(obj1.fullname.myfullname);
// console.log(obj2.fullname.myfullname);




// --------------------- solution deep copy---------------------------------



let obj1 = {
    name:"Gaurav",
    fullname:{
        myfullname:"Gaurav Sharma",
     } 
    }
//Serialization
let obj2 = JSON.stringify(obj1);
console.log(obj2);

//Deseriallization
obj2 = JSON.parse(obj2);
console.log(obj2);

obj2.name = "tony";
console.log(obj1.name);
console.log(obj2.name);

obj2.fullname.myfullname = "tony stark"
console.log(obj1.fullname.myfullname);
console.log(obj2.fullname.myfullname);




