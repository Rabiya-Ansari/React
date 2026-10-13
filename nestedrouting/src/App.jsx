import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Home from './pages/Home'
import DashboardLayout from './layout/DashboardLayout'
import DashboardHome from './pages/DashboardHome'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<AppLayout/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
   
      <Route path='/dashboard' element={<DashboardLayout/>}>
        <Route path='/dashboard' element={<DashboardHome/>}/>
      </Route>
    </Routes>


    </>
  )
}

export default App