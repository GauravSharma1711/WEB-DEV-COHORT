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
