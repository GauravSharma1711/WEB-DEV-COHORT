import mongoose from "mongoose";

import dotenv from "dotenv"
dotenv.config()

//export a fun that connect to db

const db = ()=>{

    mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    console.log(" connected to mongoDB");
})
.catch((err)=>{
console.log("Error connecting to mongoDB");

})

}

export default db;

