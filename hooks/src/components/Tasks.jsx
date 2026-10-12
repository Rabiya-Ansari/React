import React, { useState } from 'react'

export default function Tasks() {
        const [color, setColor] = useState("orange")
   
        const styles = {
            background: color,
        }
  
    return (
        <div>
            <h1>Color Box</h1>
            <input type="text" style={styles} aria-placeholder='type a color' onChange={(event) => setColor(event.target.value)} />
        </div>
    )
}
