import React, { useEffect, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({setShowLogin}) => {
  
  const [currState,setCurrState]=useState("Login");
  const [formData,setFormData]=useState({
    name:'',//Store name when signing up 
    email:'',
    password:'',
  })

  

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    });
  };
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
   
    // 1. Get users from localStorage
    const storedUsers= localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers):``;

    const existingUser=users.find(user=>user.email === formData.email && user.password === formData.password);
    if(existingUser){
      console.log('Login Succesful!');
    }else{
      console.error("Invalid email or password");
    }
    localStorage.setItem('users',JSON.stringify([...users,{email:formData.email,password:formData.password}]));

  };
  
  return (
    <div className='login-popup'>
      <form  className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          
          {currState==="Login"?<></>:<input type="text" placeholder='Your Name' name="name" value={formData.name} onChange={handleChange}required />}
          <input type="email"  placeholder='Your Email' name="email" value={formData.email} onChange={handleChange} required/>
          <input type="password" placeholder='Password' name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button>
          {currState==="Sign Up"?"Create account":"Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"?<p>Create a new Account? <span onClick={()=>setCurrState("Sign Up")}>Click here.</span></p>:<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopUp
