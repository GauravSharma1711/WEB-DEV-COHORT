// To prevent from global scope pollution so to remove pollution caused by global scope pollution we use IIFE
//  and also  immediate execution

//NORMAL FUNCTION
// function chai(){
//     console.log('DB Connected');
// }
// chai()


// IIFE

//Named IIFE
( function chai(){
  console.log('DB Connected');}
)();

// we can also use arrow function 
// ()()
//  (  ()=>{} )()
    (() => {
        console.log("DB2 Connected");
    })();
    

    // ********* SEMICOLON IS MUST AT THE END *******************

    //  Passing parameters in IIFE
 ((name) => {
        console.log(`DB2 Connected AT ${name}`);
    })('chaicode');