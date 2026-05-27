import React, { useState } from 'react'
import UseProducts from '../customHook/UseProducts'

const Products = () => {
  const [products, setProducts] = useState([])
  const { data, loading, error } = UseProducts("https://dummyjson.com/products")

  console.log(data)

  if (loading) return <p>Loading</p>
  if (error) return <p>error in api</p>

  return (
    <>
      <div className='text-center my-3 fs-1 fw-5'>Products</div>
      <div className='p-1 d-flex flex-wrap  gap-3'>
        {data.products?.map((elem, idx) => (
          // <div key={idx} style={{border:'1px solid gray', width:"15rem", padding:"7px"}}>
          //     <h3 >{elem.title}</h3>
          //     <p>{elem.description}</p>
          // </div>
          <div key={idx} className="card" style={{ width: "18rem" }}>
            <img src={elem.thumbnail} className=" card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-text">{elem.title}</h5>
              <p className='text-secondary'>{elem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products