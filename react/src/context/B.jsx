import React, { createContext, useContext } from 'react'
import { data1, data2 } from './A'
// import{data1,data2}
const B = () => {
  
  const id=createContext(data1)
  const userName=createContext(data2)
  return (
    <div>
      <p>ID:{id}, userName:{userName}</p>
    </div>
  )
}

export default B