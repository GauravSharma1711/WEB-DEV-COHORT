import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs'
import crypto from 'crypto'

import jwt from 'jsonwebtoken'

const prisma = new PrismaClient();

export const register = async (req,res)=>{
 
    const {name , email,password,phone} = req.body;

    if(!name || !email || !password || !phone){
        console.log("data missing");
    return res.status(400).json({
        success:false,
        message:"All fields are required"
    }) 
    }

        try {
           const existingUser =  prisma.user.findUnique({
                where:{email}
            })

            if(existingUser){
            return res.status(400).json({
            success:false,
            message:"User already exists"
                }) 
            }

  // hash password

  const hashedPassword = await bcrypt.hash(password,10);
const  verificationToken = await crypto.randomBytes(32).toString("hex");

const user = await prisma.user.create({
    data:{
        name,
        email,
        phone,
        password:hashedPassword,
        verificationToken
    }
})

//send mail - todo

 } catch (error) {
    return res.status(500).json({
        success:false,
        error,
        message:"Internal server error"
    }) 
        }


}


export const login  = async(req,res)=>{

    const {email,password} = req.body;

    if(!email || !password){
        console.log("data missing");
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        }) 
    }


    try {

    const user = await prisma.user.findUnique({
        where:{email}
    })


    if(!user){
        console.log("user not registered");
        return res.status(400).json({
            success:false,
            message:"Register first"
        }) 
    }


   const isPasswordCorrect = await bcrypt.compare(password,user.password);

   if(!isPasswordCorrect){
    return res.status(400).json({
        success:false,
        message:"Password is incorrect"
    }) 
   }


const  token = jwt.sign(
    {id:user.id,role:user.role},
    process.env.JWT_SECRET,
    {expiresIn:'24h'}
)

const cookieOptions = {
    httpOnly: true,              // Can't be accessed via JavaScript
    sameSite: "Strict",          // Strict cross-site cookie policy
    secure: process.env.NODE_ENV === "production", // Only send cookie over HTTPS in production
    maxAge: 7 * 24 * 60 * 60 * 1000, // Optional: 7 days expiry
    path: '/',                   // Cookie is accessible on the whole site
  };
  


res.cookie('token',token,cookieOptions)
    


return res.status(201).json({
    success:true,
    token,
    user:{
id:user.id,
name:user.name,
email:user.email,
    },
    message:"user created successfully"
}) 
    
    
} catch (error) {
    
    return res.status(400).json({
        success:false,
        message:"login failed"
    }) 

}



}