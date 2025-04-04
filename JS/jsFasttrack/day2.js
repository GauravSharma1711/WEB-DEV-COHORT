const expenses = [
    { description: "Grocery Shopping", amount: 50, category: "Food" },
    { description: "Gym Membership", amount: 30, category: "Health" },
    { description: "Dinner at Restaurant", amount: 40, category: "Food" },
    { description: "Online Course", amount: 100, category: "Education" },
    { description: "Electricity Bill", amount: 60, category: "Utilities" },
    { description: "Books Purchase", amount: 25, category: "Education" }
  ];
  
  
let exprenseReport = expenses.reduce((report ,expense )=>{
    report[expense.category]+=expense.amount
return report
},{Food:0,Health:0,Education:0,Utilities:0})

  // console.log(exprenseReport);
//   =================================================


const tasks = [
    { description: "Complete project report", completed: false, priority: 1 },
    { description: "Buy groceries", completed: true, priority: 2 },
    { description: "Schedule meeting with team", completed: false, priority: 1 },
    { description: "Workout for 30 minutes", completed: true, priority: 3 },
    { description: "Read a book", completed: false, priority: 2 }
  ];
  
let pendingSortedTask = tasks.filter(task=>!task.completed).sort((a,b)=>a.priority-b.priority);
// console.log(pendingSortedTask);


// ------------------------------------------------------------------------


  
  let movie = [
    {title:"A",ratings:[1,2,3]},
    {title:"B",ratings:[1,9,4]},
    {title:"C",ratings:[8,5,3]}
  ]

  let ans = movie.map((movie)=>{
    let total =movie.ratings.reduce((acc,cur)=>acc+cur,0);
let avg = total/movie.ratings.length;
// movie.ratings=avg;
// return movie
return {title:movie.title,ratings:avg.toFixed(2)};

  })

 
  // console.log(ans);
  // console.log(movie);

  // -----------------------------------------------------------------------------

  // ---------------------call and bind------------------------------------------
// let p1 = {
//     name:"gaurav",
//     greet:function(){
//         console.log(`hello ${this.name}`);
//         return this.name;
//     }
// }

// console.log(p1.greet())

// let p2={
//     name:"hitesh"
// }

// const ans = p1.greet.call(p2);
// console.log(ans);

//bind returns a function
// const  ans = p1.greet.bind(p2);
// console.log(ans());

// -----------------------------------------------------------------------------------------

// let p1 = {
//   name:"gaurav",
//   greet:function(){
//       console.log(`hello ${this.name}`);
//      return this.name;
//   }
// }

// console.log(p1.greet())

// let p2 = {
//   name:"hitesh",
// } 

// console.log( p1.greet.call({name:"babluu"}))
// console.log( p1.greet.bind({name:"babluu"}) () )


//    ==========================================================



// ===========================================================================




//  CASE1
const obj = {
  name: "gaurav",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  }
};

//   setTimeout(obj.greet, 1000);       // ❌ prints "Hello, undefined"
//   setTimeout( obj.greet.bind(obj)  , 1000); // ✅ prints "Hello, gaurav"
// obj.greet();->hello gaurav
// let f = obj.greet;
// f();-<  hello undefined


//   CASE2 - Arrow function inside an object
// const obj = {
//     name: "gaurav",
//     greet: () => {
//       console.log(`Hello, ${this.name}`);
//     }
//   };

//   setTimeout(obj.greet, 1000); // ❌ prints "Hello, undefined"



// 3. Arrow function returned from a normal function

// const obj = {
//     name: "gaurav",
//     greet: function () {
//       return () => {
//         console.log(`Hello, ${this.name}`);
//       };
//     }
//   };

//   setTimeout(obj.greet(), 1000); // ✅ prints "Hello, gaurav"





// 💡 First: Key Rule about Arrow Functions
// 🚨 Arrow functions don't have their own this.
// They "inherit" this from where they are defined, not from how they are called.




// 🔁 Compare Two Cases:
// 🔹 Case 1: Normal Function
// js
// Copy
// Edit
// const obj = {
//   name: "gaurav",
//   greet: function () {
//     console.log(`Hello, ${this.name}`);
//   }
// };

// obj.greet(); // ✅ Hello, gaurav
// Here greet is a normal function

// It gets this = obj because it was called like obj.greet()

// 🔸 Case 2: Arrow Function
// js
// Copy
// Edit
// const obj = {
//   name: "gaurav",
//   greet: () => {
//     console.log(`Hello, ${this.name}`);
//   }
// };

// obj.greet(); // ❌ Hello, undefined
// Here greet is an arrow function

// Arrow functions don’t get their own this

// So this comes from the outer scope (which is the global scope in this case)

// In global scope, there's no name defined → this.name = undefined

// Even though you’re calling obj.greet(), the arrow function ignores that and uses this from outside obj







// ✅ Final Takeaway:
// 🧠 "If someone is thinking of using an arrow function as a method inside an object, they should avoid it OR wrap it in a normal function."
// Because:

// Arrow functions don't have their own this

// So if you write this 👇

// js
// Copy
// Edit
// const obj = {
//   name: "gaurav",
//   greet: () => {
//     console.log(`Hello, ${this.name}`);
//   }
// };
// It won’t work as expected — this.name will be undefined

// ✅ The Right Way
// Use a normal function for object methods:

// js
// Copy
// Edit
// const obj = {
//   name: "gaurav",
//   greet() {
//     console.log(`Hello, ${this.name}`); // ✅ Works: this = obj
//   }
// };
// 🔄 Wrapping Arrow Inside a Normal Function?
// You technically can wrap an arrow function inside a normal one, but it’s usually better to just use a normal function directly for object methods.

// If you do need to use an arrow function and want correct this, do something like:

// js
// Copy
// Edit
// const obj = {
//   name: "gaurav",
//   greet: function () {
//     const arrow = () => {
//       console.log(`Hello, ${this.name}`); // ✅ this = obj, inherited from outer function
//     };
//     arrow();
//   }
// };
// obj.greet(); // ✅ Hello, gaurav
// ➡️ Here, the arrow function inherits this from the outer normal function, which has the correct this = obj



// ---------------------------HOISTING-------------------------------------

// hoisting
console.log(age1) // undefined
var age1  = 23;

console.log(age2) // cannot access age before initialization -reason(temporal dead zone)
let age2  = 23;

console.log(age3)  // cannot access age before initialization -reason(temporal dead zone)
const age3 = 23;

// // Hoisting happens
// // let x; (but NOT initialized)

// // Memory state: x = uninitialized (TDZ)

// // Code runs:
// console.log(x); // 💥 Can't use — still in TDZ
// x = 10;         // ✅ Now initialized



// ------------------------IN CASE OF FUNCTIONS---------------------------


// 🟩 Case 1: Function Declaration ✅
// js
// Copy
// Edit
// sayHi(); // ✅ Works! Output: "Hi"

// function sayHi() {
//   console.log("Hi");
// }
// ➡️ This is called a function declaration
// ➡️ It's fully hoisted — both the name and the function body
// ➡️ So you can call it before it's defined

// 🟨 Case 2: Function Expression (with const) ❌
// js
// Copy
// Edit
// greet(); // ❌ Error: Cannot access 'greet' before initialization

// const greet = function () {
//   console.log("Hello");
// };
// ➡️ This is a function expression assigned to a const variable
// ➡️ Only the variable name (greet) is hoisted, not its value
// ➡️ But const variables aren’t initialized until runtime
// ➡️ So calling it before definition gives a ReferenceError

// 🟥 Case 3: Arrow Function (with const) ❌
// js
// Copy
// Edit
// hi(); // ❌ Error: Cannot access 'hi' before initialization

// const hi = () => {
//   console.log("Hey!");
// };
// ➡️ Same as above — const is hoisted in name only
// ➡️ The arrow function isn’t initialized yet
// ➡️ So you get a ReferenceError


