// console.log("hi")

// setTimeout(()=>console.log("set time out")
// ,2000)

// Promise.resolve().then(()=>console.log("Promise resolve hogaya"))

// console.log("bye")
// hi->bye->promise resolve hogaya->set time out
//  PROMISES ARE ALSO HANDLED  BY BROWSER

// now 

console.log("hi")

setTimeout(()=>console.log("set time out 1")
,2000)

Promise.resolve().then(()=>console.log("Promise resolve hogaya"))

setTimeout(()=>console.log("set time out 2")
,2000)

console.log("bye")

// hi->bye->promise resolve hogaya->set time out 1-> set time out 2

// PROMISE AND TIME OUTS RUN IN BACKGROUND SO U MIGHT BE THINKING FLOW MUST BE
// set time out 1-> PROMISE RESOLVE HOGAYA -> set time out 2
// BUT IT DI NOT HAPPEN
// bacause we have 2 queue micro task queue(high priority) and call back queue/task queue
// PROMISES GES TO MICRO task queue so executed first always 
// where as set time out goes to task queue so executed later

//agr micro task q khali ha tabi event loop call back queue se uthayegi

// STARVATION
// IF ONE TASK OF MICRO TASK QUEUE GETS COMPLETED AND ANOTHER TASK KEEP ON COMMING IN MICRO TASK 
//QUEUE (infinitely) IN THIS CASE call back queue WILL NOT GET CHANCCE TO EXECUTE THIS IS CALLED STARVATION


