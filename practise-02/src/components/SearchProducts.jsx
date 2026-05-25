import React, { useState } from 'react'

const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Phone", price: 200 }
];

const SearchProducts = () => {
    const [search, setSearch] = useState('')

  return (
    <>
    <input type='text' placeholder='Search...'
     onChange={(e) => {
        setSearch(e.target.value)
     }} 
    />

    {
         products.filter((p)=> p.name.toLowerCase().includes(search.toLowerCase())).map((p)=>(
            <li key={p.id}>{p.name}</li>
         ))  
    }
    
    </>
  )
}

export default SearchProducts