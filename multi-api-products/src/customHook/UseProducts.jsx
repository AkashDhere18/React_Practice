import React, { useEffect, useState } from 'react'
import axios  from 'axios'

const UseProducts = (initialURL) => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const  [error, setError] = useState(false)

    async function  fetchProducts(){

         const res = await axios.get(initialURL)

        try{
            if(res){
                setData(res.data)
            }else{
                setError(true)
            }
        }
        catch{
            console.log(error)
            setError(true)
        }
        finally{
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchProducts()
    }, [initialURL])
    




  return {data,loading,error}
}

export default UseProducts