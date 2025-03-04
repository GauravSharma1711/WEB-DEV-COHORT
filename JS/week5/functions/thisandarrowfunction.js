// THIS REFERES TO CURRENT CONTEXT
//  const user = {
//     name:"gaurav",
//     city:"dehradun",
//      message: function(){
//         console.log(`hi ${this.name},welcome to chaicode`)
        
        
//      }
//  }
// user.message();
// user.name="john"
// user.message();


// console.log(this);-> {} empty object --> in node environment this refersto empty object

// AND IN BROWSER GLOBAL OBJECT IS WINDOW OBJECT


// -----------------------Arrow function-------------------------------

// function chai(){
//     let user = "gaurav"
//     // console.log(this.user); ->UNDEFINED
// }
// chai()

//  result will be same in FUNCTION EXPRESSION
// const chai = function(){
//     let user = "gaurav"
//      console.log(this.user);--> UNDEFINED  
// }
// chai()


// ARROW FUNCTION
// const chai = ()=>{
//     let user = "gaurav"
//      console.log(this.user);--> UNDEFINED
// console.log(this); ---> {}

// }
// chai()

// const add = (n1,n2)=>{
//     return n1+n2
// }
// console.log(add(3,4))

// Second way ----------IMPLICIT RETURN --------------
// const add = (n1,n2)=> n1+n2
// or 
// const add = (n1,n2)=>( n1+n2 )
// console.log(add(3,4));

// FOR OBJECTS 
const add = (n1,n2)=> ({name:"gaurav"})

console.log(add(3,4))

// AGR {} BRACKET HA TW RETURN USE HOGA AR AGR () HA TW RETURN LIKHNE KI ZARURAT NHI HA

