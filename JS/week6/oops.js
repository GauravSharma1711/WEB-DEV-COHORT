// const user = {
//     fname:"gaurav",
//     logincount:8,
//     signnedIn:false,

//     getUserDetails : function(){
//         console.log(`name:${this.fname}`);
//         // console.log(this);-> user object
        
//     }
// }

// console.log(user.fname);
// console.log(user.getUserDetails());

// console.log(this); --> {} 


// ----------------------Constructor Functions------------------------------------

// new ->constructor function
// Allows you to create multiple instances from one object literal

function user(username,logincount,isLoggedIn){
    this.username=username;
    this.logincount=logincount;
    this.isLoggedIn=isLoggedIn;

    // return this;
    // if you dont write this line still it will implicitly return
}

const userone = new user("gaurav",2,true);
const usertwo = new user("gaurav1",4,false);


console.log(userone);
console.log(usertwo);

// constructor function each time gives us new insatance(copy)


// Imp Points about new keyword

//1--> when we write new keyword a empty object gets created(which is called istance)

//2--> constructor function gets called because of new keyword
// ye kya karta ha jitne bhi aapke arguments ha unko pack karta ha ar de deta ha

// 3--> jo bhi aapne argument likhe ha vo this keyword me inject ho jate ha

// 4--> aapko mil jate ha function k andr


