// // nested scope
// --------------------------CLOSURE--------------------
// function one(){
//     const name = "gaurav"

//     function two(){
//         const web = "youtube";
//         console.log(name);
        
//     }
//     // console.log(web);
//     two()

// }
// one()


//-------------------HOISTING----------------------------

//FUCTION DECLARATION
// function addone(val){
//     return val+1;
// }
// console.log(addone(5));

// //FUNCTION EXPRESSION
// const add = function(val){
//     return val+1;
// }
// console.log(add(5))

//  IF FUNCTION IS DECLARED AS FUNCTIONeXPRESSION WAY THEN
//  FUN CANNOT BE EXECUTED BEFORE DECLARATION BUT IN FUNCTIONdECLARATION
// THEY CAN BE DECLARED AFTER EXECUTION


console.log(sub(5));
function sub(num){
    return num-1;
}
//this will work

// but 
sub1(5);

const sub1 = function(num){
    return num-1;
}
// this code will not work

