import React, { useState } from 'react'

export default function Login() {
  const[email,emailState]=useState("")
  const[password,passwordState]=useState("")
  function handleLogin(e){
    e.preventDefault()
    console.log(email,password);
    emailState("");
    passwordState("");
  }
  return (
    <>

<form onSubmit={handleLogin}>
    <h1>Login Form</h1>
    <label htmlFor="email">Email</label>
    <input type="email"  value={email} name='email' onChange={(e)=>emailState(e.target.value)}/>
    <br />
    <br />
    <label htmlFor="password">Password</label>
    <input type="password" value={password}  name='password' onChange={(e)=>passwordState(e.target.value)}/>
    <br />
    <br />
    <button type='submit'>Login</button>
</form>
    </>
  )
}
