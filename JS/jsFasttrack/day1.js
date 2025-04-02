const products = [
    {  name: "Laptop",   stock: 30},
    { name: "Phone", stock: 120 },
    { name: "Tablet",  stock: 45 },
    {  name: "Smartwatch", stock: 70},

];

  const lowStockItems  = products.filter((product)=>( product.stock<50))
//   or
const low = products.filter((product)=>{
    return product.stock<50
})


   console.log(lowStockItems);
   
// ======================================

const users = [
    { user: "Alice", activityCount: 10 },
    { user: "Bob", activityCount: 15 },
    { user: "Charlie", activityCount: 8 },
    { user: "David", activityCount: 20 },
    { user: "Emma", activityCount: 12 }
];



const max = users.reduce((acc,cur)=> 
    cur.activityCount  >  acc  ?  cur.activityCount : acc,0 )

console.log(max);




