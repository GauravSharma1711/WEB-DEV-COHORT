// in js everything is object

const p1 = {
    fname:"gaurav",
    lname:"sharma",
    getfullname(){
        return `${this.fname} ${this.lname}`
    }

}

const p2 = Object.create(p1);


console.log(p1);
console.log(p2);

console.log(p2.hasOwnProperty("name")); 
console.log(Object.getPrototypeOf(p2) === p1); // true

// ----------------

p2.__proto__.fname="tony"

console.log(p1.fname);

// --------------------------------------------------------------------------

let name = "gaurav sharma"
//  name is an obj of string class

// name.__proto__ === String.prototype
// String.prototype.__proto__ === Object.prototype
// Object.prototype.__proto__ === null (end of the chain)



// PROTOTYTPE CHAIN
const x1  ={
    xp1:"i am in x1"
}


const x2 ={
    xp2:"i am in x2",
    __proto__:x1,
}



const x3  ={
    xp3:"i am in x3",
    __proto__:x2,
}

console.log(x3.xp1)


// =============================================


class Student {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
   
    }
}




const s1 = new Student("John");


const s2 = new Student("monu");
// new keyword ne s1.__proto__ = Student.prototype k equal kar diya
console.log(s1.getName())

const s6 = {
  __proto__ :Student.prototype 
}
console.log(s6.getName());
//  object ka __proto points to Baseclass.prototype


console.log(s1.__proto__.getName());