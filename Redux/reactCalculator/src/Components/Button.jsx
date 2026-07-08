import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from '../redux/counterSclice'

const Button = () => {
    const [amount, setAmount] = useState()
    const dispatch = useDispatch()

    const  handelIncrementAmount = () =>{
        dispatch(incrementByAmount(Number(amount)))
        setAmount('')
    }
  return (
    <div>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(reset())}>Reset</button>
        <input 
        type="number"
        value={amount}
        placeholder='Enter Amount'
        onChange={(e)=> setAmount(e.target.value)}
         />
         <br/>
         <br/>
        <button onClick={handelIncrementAmount}>Increment By Amount</button>
    </div>
  )
}

export default Button