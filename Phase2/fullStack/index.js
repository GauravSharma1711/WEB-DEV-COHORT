import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js";

dotenv.config();

const app = express();

app.use(cors({
    origin:process.env.BASE_URL,
    credentials:true,
    methods:['GET','POST','DELETE','OPTIONS'],
    allowedHeaders:['content-Type','Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.get("/gaurav",(req,res)=>{
    res.send("hello gaurav")
})

//connect to db
db();


app.listen(port,()=>{
    console.log(`Example app listning on port ${port}`);
})