//function defination
function printname(){
console.log("gaurav");
}

printname//reference
printname()//function execution

// ---------------------------------------------------

function add(num1,num2){ // num1,num2->parameters
 
    console.log(num1+num2);


}

// add(3,4);  3,4->argument
const result = add(3,4);
console.log(result);
//gives  undefined becoz our fun does not returns anything so we have to return it

function add1(n1,n2){
   
    let res = n1+n2;
    return res;
    // after return nothing gets executed
}
const result1 = add1(3,4);
console.log(result1);
//output is 7 as fun is returning res (n1+n2)

// -----------------------------------------------------------

// function username(name){
//     console.log(` My name is ${name}`);
//     return `My name is ${name}`

// }
// console.log(username("gaurav"));

//if i did not provide any argument then name will be undefined
// function username1(name){
//     console.log(name);
//     console.log(typeof name);
//     return `My name is ${name}`
// }
// console.log(username1());
// --------------------------------------------------------

// for safety we van pass value in parameter
// function username2(name="joy"){
//     console.log(name);
//     return `My name is ${name}`
// }
// console.log(username2());
//so if we do not provide any name name will be there

// --------------------------------------------------------------

//where parameter are multile
// function calcprice(...n){
// return n
// }
// console.log(calcprice(200,300,400));
// prints array of all the numbers
  
// -------
// function calcprice2(val1 , val2 , ...num){
// return num
// }
// console.log(calcprice2(100,200,300,400,500));


// --------------------- objects and fun --------------

// const user = {
//     name:"gaurav",
//     city:"dehradun"
// }

// function objfun(object){
//    console.log(`my name is ${object.name} and i am from ${object.city}`);

   
// }
// // objfun(user)

// objfun({
//     name:"john",
//     city:"london"
// })

// -------------------------Array and fun----------------
let arr= [1,2,3,4,5]

function arrfun(arr){
    console.log(arr[0]);
}
// arrfun(arr);
arrfun([200,300,400])