import React from 'react'
import { useState } from 'react'

const Count = (name) => {
    // console.log(name)
    const [count, setCount] = useState(0);
    
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleRemove = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }
    const style = {
        border : "1px solid blue"
    }
  return (
    <div className={{style}}>
        <h1>name: {name.name}</h1>
        <h2>age : {name.age}</h2>
      <h1>count : {count}</h1>

      <button onClick={handleAdd}>add</button>
      <button onClick={handleRemove}>remove</button>
    </div>
  )
}

export default Count
