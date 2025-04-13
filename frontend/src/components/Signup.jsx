import React, { useState } from 'react'

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading , setLoading] = useState(false);
     const[error,setError] = useState('');

   const  submitHandler = async(e)=>{
           e.preventDefault();
           setLoading(true);
           setError('')

           //make api call to backend with data
           //get res from backend
           //take action based on response



     }

  return (
    <div className='signup'>
  
  <h1>welcome to signup page</h1>

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