
import React from 'react'
import Welcom from './component/Welcom'
import Products from './component/Products'
import Login from './auth/Login'
import Signup from './auth/Signup'

export default function App() {
  return (
    <>
     {/* <Products/> */}
     <Login/>
     <Signup/>
    </>
  )
}
