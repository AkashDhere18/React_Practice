import React, { useEffect, useState } from 'react'
import StopWatch from './components/StopWatch';
import RandomJoke from './components/RandomJoke';
import FormValidation from './components/formValidation';

const App = () => {
  const [count, setCount] = useState(0);
  const [val ,setVal] = useState('')

  useEffect(()=>{
    if(count % 2 == 0){
      setVal ("even")
    }
    else{
      setVal ('odd')
    }
  },[count])


  return (
    <>
    <div>
      <h2>Count: {count}</h2>
      <h4>This is {val} number</h4>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>

    <StopWatch />
    <RandomJoke />
    <FormValidation />
    
    </>
  )
}

export default App
