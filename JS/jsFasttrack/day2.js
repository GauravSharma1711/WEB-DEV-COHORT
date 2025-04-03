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

  console.log(exprenseReport);
//   =================================================


const tasks = [
    { description: "Complete project report", completed: false, priority: 1 },
    { description: "Buy groceries", completed: true, priority: 2 },
    { description: "Schedule meeting with team", completed: false, priority: 1 },
    { description: "Workout for 30 minutes", completed: true, priority: 3 },
    { description: "Read a book", completed: false, priority: 2 }
  ];
  
let pendingSortedTask = tasks.filter(task=>!task.completed).sort((a,b)=>a.priority-b.priority);
console.log(pendingSortedTask);


// ------------------------------------------------------------------------


  
  let movie = [
    {title:"A",ratings:[1,2,3]},
    {title:"B",ratings:[1,9,4]},
    {title:"C",ratings:[8,5,3]}
  ]

  let ans = movie.map((movie)=>{
    let total =movie.ratings.reduce((acc,cur)=>acc+cur,0);
let avg = total/movie.ratings.length;
return {title:movie.title,avgRating:avg.toFixed(2)};
  })

 