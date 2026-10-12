import React, { useState } from 'react'

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  function handleSubmit(event) {
    event.preventDefault()
    console.log("submitted date",{email,password})
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>loginForm</h1>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Enter Email' />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='********' />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

