import React  from 'react'
import { auth } from '../firebase'
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

const Login = () => {

    const [err,setErr] = useState(false);
    const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

  try{
    await signInWithEmailAndPassword(auth, email, password)
    navigate("/")
  }catch(err){
    setErr(true);
  }
  };

    return (
      <div className='formContainer'>
          <div className='formWrapper'>
          <span className='logo'>Chatter Box</span>
          <span className='title'>Login</span>
              <form onSubmit={handleSubmit}>
                  <input type='email' placeholder='Gmail'/>
                  <input type='password' placeholder='Password' />
                  <button>Sign in</button>
                  {err && <span>something went wrong</span>}
              </form>
              <p>You Don't Have An Account?<Link to="/register">Register</Link></p>
          </div>
      </div>
    )
}


export default Login;