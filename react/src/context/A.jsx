import React, { createContext } from 'react'
import B from './B';
export const context = createContext();
const data1 = 101;
const data2 = "Ali";
const A = () => {

  const id = data1
  const userName = data2
  return (
    <>
      <context.Provider value={{ id, userName }}>
        <B />
      </context.Provider>
    </>
  )
}

export default A
export { data1, data2 }