import React, { useReducer } from 'react'

const initialState = {coin : 50}

function reducer(state, action){
    switch (action.type){
        case 'COLLECT_COIN':
            return {coin: state.coin + 5}
        case 'LOOSE_COIN':
            return {coin: state.coin -2}
        case 'RESET':
            return {coin : 50}        
        default:
            return state    
    }
}

const CoinReducer = () => {
    const [state, dispatch] = useReducer(reducer , initialState)

  return (
    <>
     <h1>Coin Collector Game</h1>
     <h3>Coin : {state.coin}</h3>
     <button onClick={()=>dispatch({type:'COLLECT_COIN'})}>Collect Coin</button>
     <button onClick={()=>dispatch({type:'LOOSE_COIN'})}>Loss Coin</button>
     <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>

    </>
  )
}

export default CoinReducer