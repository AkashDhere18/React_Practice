import React, { useEffect, useState } from 'react'

const StopWatch = () => {
  const [time,setTime] = useState(0)
  const [running, setRunning] = useState(false)

   function timer(){

         setInterval(() => {
            setTime(prev => prev + 1)
         },1000)
  }

  function reset(){
    setTime(0)
    setRunning(false)
  }

  useEffect(()=>{
    let interval ;
    if(running){
       interval =  setInterval(() => {
            setTime(prev => prev + 1)
         },1000)
    }

    return () => {
        clearInterval(interval)
    }

  },[running])

  return (
    <>
     <h1>StopWatch</h1>
     <h1>{time}</h1>
     <button onClick={()=>{setRunning(true)}}>Start Timer</button>
     <button onClick={()=>{setRunning(false)}}>Stop Timer</button>
     <button onClick={reset}>Reset Timer</button>
    </>
  )
}

export default StopWatch