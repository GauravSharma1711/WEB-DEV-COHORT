 import bcrypt from 'bcryptjs'
import User from '../model/user.model.js'
 import crypto from "crypto"
 import nodemailer from "nodemailer"
 import jwt from "jsonwebtoken"

 const registerUser = async(req,res)=>{
   //get data
   // validate
   //check if user already exists
   //create a user in database
   // create a verification token
   //save token in database
   // send token as email to user
   //send success status to user

   const {name,email,password}   = req.body  

   if(!name||!email||!password){
    return res.status(400).json({
        message:"All fields are required"
    })
   }

  //  console.log(name);
   

   try {
   const existingUser = await  User.findOne({email})
   if(existingUser){
    return res.status(400).json({
        message:"User already exists"
    })
   }

  

  const user = await  User.create({
    name,
    email,
    password
   })
   console.log(user);
   

   if(!user){
    return res.status(400).json({
        message:"User not registered"
    })
   }

   const token = crypto.randomBytes(32).toString("hex")
   console.log(token);

user.verificationToken=token

await user.save()

//send email

const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port:  process.env.MAILTRAP_PORT,
    secure: false, // true for port 465, false for other ports
    auth: {
      user:  process.env.MAILTRAP_USERNAME,
      pass:  process.env.MAILTRAP_PASSWORD,
    },
  });


  const mailOptions = { 
    
        from: process.env.MAILTRAP_SENDEREMAIL,
        to: user.email,
        subject: " verify your email ✔", 
        text: `Please click on the following link
        ${process.env.BASE_URL}/api/v1/users/verify/${token}
        `
  }
   
  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
  

   res.status(201).json({
    message:"user registered successfully",
    success:true
   })
   


   } catch (error) {
    res.status(400).json({
        message:"use not registered ",
        error,
        success:false
       })
   }




}

const verifyUser = async (req,res)=>{

  //get token from url
  //validate
  // find user based on token
  // set isverified to true
  //remove verfication token
  // save
  // return response

  try {

    const {token} = req.params;
    console.log(token);

    if(!token){
      return res.status(400).json({
        message:"Invalid token"
      })
    }

    const user = await User.findOne({verificationToken:token})

    if(!user){
      return res.status(400).json({
        message:"Invalid token"
      })
    }

    user.isVerified = true;
    user.verificationToken=undefined;
   await user.save();



console.log("verified successfull");
res.status(201).json({
  message:"User verified successfully"
})

    
  } catch (error) {
    res.status(400).json({
      message:"use not verified ",
      error,
      success:false
     })
  }

}

const login = async (req,res)=>{

  const {email,password} = req.body;

  if(!email || !password){
   res.status(400).json({
    message:"All fields are required"
   })
  }

  try {
    // check if user exists with help of email
    const user = await User.findOne({email});
    
    if(!user){
      res.status(400).json({
        message:"Invalid email or password"
      })
    }

    //check if password is correct
    const isMatch = await bcrypt.compare(password,user.password);
    console.log(isMatch);
    
    if(!isMatch){
      res.status(400).json({
        message:"Invalid email or password"
      })
    }

    if(!user.isVerified){
      res.status(400).json({
        message:"user not verified"
      })
    }

   
const token = jwt.sign({
  id:user._id,
  role:user.role
},
process.env.JWT_SECRET,
{
  expiresIn:'24h'
}
)

const cookieOptions = {
  httpOnly:true,
  secure:true,
  maxAge:24*60*60*1000
}
res.cookie("token",token,cookieOptions);

 res.status(200).json({
  success:true,
  message:"Login successfully",
  token,
  user:{
    id:user._id,
    name:user.name,
    role:user.role
  }
 })


  } catch (error) {
    res.status(400).json({
      message:error.message,
      success:false
    })
  }


}

const getMe = async (req,res)=>{

try {

const user = await User.findById(req.user.id)
                       .select('-password')

                       
                       

      if(!user){
        return res.status(400).json({
          success:false,
          messaage:"User not found",
        })
      }

       res.status(200).json({
        success:true,
        user,
      })
  
     
      

} catch (error) {
  console.log("error in getMe:",error);

  if (!res.headersSent) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
  
}
}

const logoutUser = async(req,res)=>{
try {
  res.cookie('token','',{ expires: new Date(0)});
  res.status(200).json({
    success:true,
    message:"Logged out successfully",
  })
} catch (error) {
  
}
}


const forgotPassword = async(req,res)=>{
  try {
    //get user
    //find user based on email
    //reset token+ reset expiry =>date.now()+10*60*1000
    //user.save()
    //send email =>design url
  } catch (error) {
    
  }
  }

  const resetPassword = async(req,res)=>{
    try {
      // collect token from params
      // password from req.body
    
    } catch (error) {
      
    }
    }


    




export {registerUser,verifyUser,login,logoutUser,getMe,forgotPassword,resetPassword}

