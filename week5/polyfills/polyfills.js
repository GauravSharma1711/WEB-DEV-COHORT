//------------------  Map polyfill------------------------

// let arr = [1,2,3,4,5];

// if(!Array.prototype.myMap){
//     Array.prototype.myMap = function(userfn){

//         let newarr = [];
//         let originalarr = this;

//         for(let i =0;i<originalarr.length;i++){
//           newarr.push(userfn(originalarr[i]));

//         }
//         return newarr;
//     }
// }

// let arr1 = arr.myMap((e)=> e*2);

// console.log(arr);
// console.log(arr1);



// ---------------polyfill of for each------------------------

// let arr = [1,2,3,4,5];

// if(!Array.prototype.myforeach){
//     Array.prototype.myforeach = function(userfn){

//     let originalarr = this;

//     for(let i =0 ;i<this.length;i++){
//         userfn(this[i]);
//     }
//     }
// }

//  arr.myforeach((e)=> console.log(e));



// -------------------- polyfill for filter----------------------

// let arr = [1,2,3,4,5];

// if(!Array.prototype.myfilter){
//     Array.prototype.myfilter = function(userfn){

//         let newarr = [];
//         let originalarr = this;

//         for(let i =0;i<originalarr.length;i++){
//           if(userfn(originalarr[i])){
//               newarr.push(originalarr[i]);
//       l           }
//         }
//         return newarr;
//     }
// }

// let arr1 = arr.myfilter((e)=> e%2==0);


// console.log(arr1);

// ------------------------------------------------Polyfill for reduce-----------------------------------

// const arr = [1,2,3,4,5];

// if(!Array.prototype.myreduce){
//     Array.prototype.myreduce = function(userfun,initialval){
//         let acc=initialval;
//         for(let i=0;i<this.length;i++){
//       acc=userfun(acc,this[i]);
//         }
//         return acc;
//     }
// }

// const ans = arr.myreduce(
//     (accumulator, curval)=> accumulator+curval , //userfn
//     0 //initialval
// )

// console.log(ans);


// -----------------------------------Polyfill for includes-----------------------------------

// const arr = [1,2,3,4,5];

// if(!Array.prototype.myincludes){
//     Array.prototype.myincludes = function(value){
// for(let i =0 ;i<this.length;i++){
//     if(this[i]===value){
//         return true;
//     }
// }
// return false;
//     }
// }

// let ans = arr.myincludes(4);
// console.log(ans);



// -----------------------------------Polyfill for slice-----------------------------------

// const arr = [0,1,2,3,4,5]

// if(!Array.prototype.myslice){
//     Array.prototype.myslice = function(start=0,end=this.length){
         
//         const result = [];

// if(start>=end){
//     return result;
//             }

//         if(start>this.length){
//            return [];
//         }else if(start< -this.length){
//             start =0 ;
//         }else if(-this.length<=start && start<0){
//             start+=this.length
//         }


//         if(end>=this.length){
//             end = this.length
//          }else if(end< -this.length){
//              end =0 ;
//          }else if(-this.length<=end && end<0){
//              end+=this.length
//          }

//          for(let i=start;i<end;i++){
//             result.push(this[i]);
//          }
// return result;
//       }
//    }

//    console.log(arr.myslice());
//    console.log(arr.myslice(2));
//    console.log(arr.myslice(2,5));
//    console.log(arr.myslice(-3,4));
//    console.log(arr.myslice(1,-2));
// console.log(arr.myslice(1,1));


// -----------------Polyfill for splice -------------------------------


const arr = [0,1,2,3,4,5]

if(!Array.prototype.mysplice){
    Array.prototype.mysplice = function(start,delcount , ...items){
          let del = true;
        if(-this.length<=start && start<0){
            start+=this.length;
        }else if(start< -this.length){
            start =0;
        }else if(start>=this.length){
            del=false;
        }

        if(!delcount || del && delcount>this.length-start){
            delcount = this.length-start;
        }
       
        const result = this.slice(start,start+delcount);


          
          for (let i = start; i < this.length - delcount; i++) {
            this[i] = this[i + delcount];
        }

        
        this.length -= delcount;

        
        if (items.length > 0) {
            this.splice(start, 0, ...items);
        }




     return result;


      }
   }

   
   console.log(arr.mysplice(-2,1,"gaurav"));
console.log(arr);


// --------------------Polyfill for sort-------------------------

// let arr = [6,8,3,1,9];

// if(!Array.prototype.mysort){
//     Array.prototype.mysort  = function(userfun){
//  const arr = this;
//  for(let i =0;i<arr.length-1;i++){
//     for(let j = i+1;j<arr.length;j++){
//     let val = userfun(this[i],this[j]);

//     if(val>0){
// let temp;
  
//   temp = this[i];
//   this[i] = this[j];
//   this[j]=temp;
//     }
//     }
//  }
//  return arr;
//     }
// }
// arr.mysort((a,b)=>a-b);
// console.log(arr);

// --------------Polyfill of concat---------------------------

// signature-merge two or more array , returns a new array

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];

// if(!Array.prototype.myconcat){
//     Array.prototype.myconcat = function(...userfn){
//         let result = [...this];
       
      
//         let length = userfn.length
        
//             for(let i=0 ; i<length;i++){
//                 if(Array.isArray(userfn[i])){
//                     result.push(...userfn[i])
//                 }else{
//                     result.push(userfn[i]);
//                 }
//             }

//             return result;
//     }
// }
// const arr3 = arr1.myconcat([7,8],[99,87],66,46)
// console.log(arr3);


// ------------------------Polyfill for every----------------
//  signature-test weather all elements of array pass the given condition

// const arr = [2,4,7,8,10];

// if(!Array.prototype.isEvery){
//     Array.prototype.isEvery = function(userfun){
//       for(let i =0;i<this.length;i++){
//         if(!userfun(this[i])){
//             return false;
//         }
//       }
//       return true;
//     }
// }
// console.log(arr.isEvery(e=>e%2==0));

// -------------------------------Polyfill for fill--------------

// let arr = [1,2,3,4,5];
// if(!Array.prototype.myfill){
//     Array.prototype.myfill = function(val,start =0,end=this.length){

//         for(let i = start;i<end;i++){
//             this[i] = val;
//         }

// return this;
//     }
// }
// console.log(arr.myfill(0,2,4))
// console.log(arr.myfill(4,2,))
// console.log(arr.myfill(0))

// --------------------------Polyfill for push--------------------------------

// const arr = [1,2,3,4];

// if(!Array.prototype.mypush){
//     Array.prototype.mypush = function(val){
//         length = this.length;
//         this[length] = val;
//         return this.length;
//     }
// }

// console.log(arr.mypush(5));



// --------------------------Polyfill for pop--------------------------------

// const arr = [1,2,3,4,5];

// if(!Array.prototype.mypop){
//     Array.prototype.mypop = function(){
//         length = this.length;
// let ans = this[this.length-1];
//         this.length = this.length-1;
//         return ans;
//     }
// }

// console.log(arr.mypop());


// --------------------------Polyfill for shift--------------------------------

// const arr = [1,2,3,4,5];

// if(!Array.prototype.myshift){
//     Array.prototype.myshift = function(){

//              let ans =  this[0];

//              for(let i =0 ;i<this.length-1;i++){
// this[i] = this[i+1];
//              }
//          this.length = this.length-1;
//                 return ans;
//     }
// }


// console.log(arr.myshift());
// console.log(arr);


// --------------------------Polyfill for unshift--------------------------------

// const arr = [1,2,3,4,5];

// if(!Array.prototype.myunshift){
//     Array.prototype.myunshift = function(val){
//             this.length = this.length+1;
//             for(let i=this.length-1;i>=1;i--){
//                 this[i]=this[i-1];
//             }
//             this[0]=val;
//     }
// }


// console.log(arr.myunshift(0));
// console.log(arr);

