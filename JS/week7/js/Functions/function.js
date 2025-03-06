// CALL , BIND

let person1 = {
    name:"Gaurav",
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

let person2 = {
    name:"mohit"
}

person1.greet() // Hello gaurav
person1.greet.call(person2)  // hello mohit
// person1.greet.bind(person2) -> this return a fun...  SO
 const fun = person1.greet.bind(person2);
 fun() // -> hello mohit

//  also we can do 
person1.greet.call({name:"john"})   // hello john   (Context pass karte ha har baar)
// call context change karne me help karta ha



 // Apply -> apply is similar to call but takes arguments as an array

//  --------------------------------------------------------------------------------

const person3 = {
    name:"tommy",
    greet:function(){
        console.log(`hello ${this.name}`);
        
    }
}

console.log("hi");
person3.greet();
console.log("bye");
// output 
// hi
// hello tommy
// bye

// -- but---
const person4 = {
    name:"tony",
    greet:function(){
        console.log(`hello ${this.name}`);
        
    }
}

console.log("hi");
setTimeout(
    person4.greet , 2000);
console.log("bye");
// outout  hi ,  bye  , but no hello tony 

// coz set time out is a browser fun when it returns through call back q  call stack removees all fun and CONTEXT  is lost  so we need to use call or bind

const person5 = {
    name:"tony",
    greet:function(){
        console.log(`hello ${this.name}`);
        
    }
}

console.log("hi");
setTimeout(
    person5.greet.bind(person5) , 2000);
console.log("bye");
//  now output will be  hi, bye, hello tony