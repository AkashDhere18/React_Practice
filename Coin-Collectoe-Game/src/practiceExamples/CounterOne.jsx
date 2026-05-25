import React, { useEffect, useMemo, useRef, useState } from 'react'

const CounterOne = () => {

    const [count,setCount] = useState(100)
    const [them, setThem] = useState('light')
    const prevValuecount = useRef()

function handleIncreament(){
    setCount((c)=>c+1)
}

const handleDecreament = ()=>{
    setCount(c=>c-1)
}

function expensiveCalculation(number){
    for(let i=0; i<100;i++){}
    return number*number
}

function handelThem(){
    setThem(prev => prev== 'light' ? 'dark' : 'light')
}

const result = useMemo(()=>{
    return expensiveCalculation(count)
},[count])

useEffect(()=>{
    prevValuecount.current = count
},[count])


  return (
    <div style={{height:"400px"}}>
        
       <h1> Counter : {count}</h1>
       <h1>previous count : {prevValuecount.current}</h1>
       <h3>expensive calculation :{result}</h3>

       <button onClick={()=>setCount(count+1)}>Increament</button>
       <button onClick={()=>setCount(count-1)}>Decreament</button>
        <button onClick={()=>setCount(100)}>Reset</button>
        <hr />
        <button onClick={handleIncreament}>Increament By Function</button>
        <button onClick={handleDecreament}>Decreament By Function</button>

        <hr/>
        <button onClick={handelThem}>{them}</button>
        </div>
  )
}

export default CounterOne