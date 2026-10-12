import React, { useState } from 'react'

export default function Signup() {
    const [newuser, newuserState] = useState({
        username: "",
        useremail: "",
        userpassword: ""
    })

    function handleSignup(e) {
        e.preventDefault()
        console.log(newuser);
        newuserState({ username: "", useremail: "", userpassword: "" })
    }
    function handleChange(key,val) {
        newuserState({
            ...newuser,
            [key]: val
        })
    }
    return (
        <>
            <form onSubmit={handleSignup}>
                <h1>SignUp Form</h1>
              
                <input type="username" value={newuser.username} name='username' onChange={(e) => handleChange(e.target.name, e.target.value)} />
                <br />
                <br />
                
                <input type="useremail" value={newuser.useremail} name='useremail' onChange={(e) => handleChange(e.target.name, e.target.value)} />
                <br />
                <br />
                
                <input type="userpassword" value={newuser.userpassword} name='userpassword' onChange={(e) => handleChange(e.target.name, e.target.value)} />
                <br />
                <br />
                <button type='submit'>Sign Up</button>
            </form>
        </>
    )
}
