// ----------- new keyword ------------------
// function multi(num){
//     return num*5;
// }

// multi.power = 2;

// console.log(multi(5));    --> 25
// console.log(multi.power); --> undefined
// console.log(multi.prototype); --> {}


// function createuser(username,score){
//       this.username=username
//       this.score=score
// }
// createuser.prototype.inc=function(){
//   this.score++
// }

// createuser.prototype.print=function(){
//   console.log(`score is ${this.score}`);
//   }
  

// const chai  = new createuser("chai",25);
// const tea  = new createuser("tea",250);

// chai.print()


// ---------------Prototype starts---------

// let myname = "gaurav   ";
// console.log(myname.truelength);

// let arr = [1,2,3,4,5];

// // -------------Inheritance------------
const user={
    type:"teacher",
    age:46
}
const teacher = {
    makevideo:true,

}
const teachingsupport={
    available:24
    }

const ta={
fulltime:false,
__proto__:teachingsupport
}

console.log(ta.available);
teacher.__proto__ = user

//------------- modern syntax--------------- 

Object.setPrototypeOf(teacher,ta)

let myname = "gaurav  "

String.prototype.truelength = function(){
    console.log(`${this}`);
    
    console.log(`true length is ${this.trim().length}`);
}
myname.truelength()


