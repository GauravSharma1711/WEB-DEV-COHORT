// console.log("age is", age);
// const age = 25;
// ERROR -Cannot access 'age' before initialization


// test()
// function test(){
    // console.log("this is test");
// }
// this is test
// because in ccase of functions complete function is hoist(loaded) in the memory phase


// test2()
// var test2 = function (){
    // console.log("this is test 2");
// }
// ERROR -> test2 is not a function



// console.log("age is", age);
// var age = 24;
//  age is undefined



// age=3000
// console.log("age is", age);
// var age = 24;
//  age is 3000



// console.log("age is", age);
// let age = 24;
// Cannot access 'age' before initialization     

// console.log("name is" , myname);
// const myname = "gaurav"
// Cannot access 'age' before initialization   

// but IN CASE  OF VAR AGE WAS UNDEFINED SO IS IT THE CASE THAT HOISTING DOES NOT WORK I NCASE OF LET AND CONST?
//  NO THATS NOT CASE 
//  LET and CONST   both get HOIST  but in case of let and const  but we cannot acce3ss them bcoz there is a concept called
// TEMPORAL DEAD ZONE 
// ->

// console.log("age is", age);

// THIS IS DEAD ZONE --> ACCESSING AGE HERE WILL GIVE US ERROR SAME IN CASE OF CONST ALSO
// let age = 24;



  