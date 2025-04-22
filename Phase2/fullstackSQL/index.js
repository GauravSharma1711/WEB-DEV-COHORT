
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors'
dotenv.config()
import userRoutes from './routes/auth.routes.js'

const app  = express();

const PORT = process.env.PORT || 4000


app.use(cookieParser())
app.use(cors({
 origin:'http://localhost:5173'
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.use('/api/v1/users',userRoutes);

app.listen(PORT,()=>{
    console.log(`listning at post:${PORT}`);
})