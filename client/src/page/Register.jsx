import React from 'react'
import {FaUser} from 'react-icons/fa';
import {FaLock, FaEnvelope} from 'react-icons/fa';
import './Register.css'
function Register() {
  return (
    <div className="wrapper1">
    <div className="from-box register">
      <form action=''> 
         <h1>Registration</h1>
         <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className='icon'/>
         </div>
         <div className="input-box">
          <input type="email" placeholder="Email" required />
          <FaEnvelope className='icon'/>
         </div>
         <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className='icon' />
         </div>
         <div className="remember-forgot">
          <label><input type='checkbox'/>I agree to the terms & conditions</label>
         </div>

         <button type="submit">Register</button>

         <div className="login-link">
          <p>Already have an account? <a href="/login">Login</a></p>
         </div>
      </form>
    </div>
  </div>

  )
}

export default Register