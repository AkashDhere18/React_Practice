import React, { useState } from 'react'
import UseProducts from '../customHook/UseProducts'

const Recipies = () => {
    const [products, setProducts] = useState([])
    const { data, error, loading } = UseProducts("https://dummyjson.com/recipes")

    console.log(data)

    if (loading) return <p>Loading...</p>
    if (error) return <p>error</p>
    return (
        <>
            <div className='text-center my-3 fs-1 fw-5'>Recipies</div>
            <div className='p-5 d-flex flex-row gap-5 flex-wrap'>
                {data?.recipes.map((r, i) => (
                    <div key={i} className="card" style={{ width: "18rem" }}>
                        <img src={r.image} className=" card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-text">{r.name}</h5>
                        </div>
                    </div>
                ))}

                {/* <div key={i} className="card" style={{width: "18rem"}}>
                     <img src='https://plus.unsplash.com/premium_photo-1773954455018-901a7a9f13bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D' className=" card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{r.name}</p>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Recipies