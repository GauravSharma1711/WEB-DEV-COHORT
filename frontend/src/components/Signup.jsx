import React, { useState } from 'react'
import apiClient from '../../service/apiClient.js'
import { useNavigate } from 'react-router';
const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading , setLoading] = useState(false);
     const[error,setError] = useState('');


     //navigation
     const navigate = useNavigate();


   const  submitHandler = async(e)=>{
           e.preventDefault();
           setLoading(true);
           setError('')

           //make api call to backend with data
           //get res from backend
           //take action based on response
           try {
            console.log("trying to signup");
 const data = await apiClient.signUp(name,email,password);
 console.log("signup response:",data);
 if(data.success){
navigate('/login')
 }else{
    setError(data.message||'signup failed')
 }
  } catch (error) { }
finally{
    setLoading(false);
}

     }

  return (
    <div className='signup'>
  
  <h1>welcome to signup page</h1>
{error && <div>Eoor:{error}</div> }
<form  onSubmit={submitHandler}>

<div>
    <label htmlFor="name">name:</label>
    <input 
    type="text"
     name='name'
     id='name'
     required
     value={name}
    onChange={(e)=>setName(e.target.value)}
      />

<label htmlFor="name">email:</label>
    <input 
    type="text"
     name='email'
     id='email'
     required
     value={email}
    onChange={(e)=>setEmail(e.target.value)}
      />

<label htmlFor="name">password:</label>
    <input 
    type="password"
     name='password'
     id='password'
     required
     value={password}
    onChange={(e)=>setPassword(e.target.value)}
      />
</div>

<button
type='submit'
disabled={loading}
>
{loading ?  'Signup....' : 'Signup'}
</button>


</form>


    </div>
  )
}

export default Signup