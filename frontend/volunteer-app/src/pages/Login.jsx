import React from 'react'
import './Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setIsLoggedIn}) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleContinue = () => {
    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()
    if(!trimmedEmail || !trimmedPassword){
      alert("Please enter email and password")
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(trimmedEmail)){
      alert("Enter a valid email address")
      return;
    }
     setIsLoggedIn(true);
    navigate("/contact")
  }
  return (
    <div className='container'>
      <h1>Login / Signup</h1>
      <input type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder='Password' value={password}
        onChange={e => setPassword(e.target.value)} />
      <button className='primary' onClick={handleContinue}>Continue</button>
    </div>
  )
}

export default Login