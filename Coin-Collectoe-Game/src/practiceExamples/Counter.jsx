import React, { useState } from 'react'

const Counter = () => {

    const prevCount = useRef()

    const [num, setNum] = useState(0)

    function increaseNum(){
        setNum(num+1)
    }

    function increaseBy5(){
        setNum(num+5)
    }

  return (
    <div>
        <h1>Counter</h1>
        <h1>{num}</h1>
        <button onClick={increaseNum}>Increase</button>
        <button onClick={()=>{
            setNum(num-1)
        }}>Decrease</button>
        <button onClick={()=>{
            increaseBy5()
        }}>Increase by 5</button>
    </div>
  )
}

export default Counter