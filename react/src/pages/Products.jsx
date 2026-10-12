import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { themeContext } from '../context/ThemeContext'

const Products = () => {
 const {theme}=useContext(themeContext);
    const [data, setData] = useState([])
    const fetchData = async () => {
        const response = await axios.get("https://dummyjson.com/products")
        console.log(response.data.products)
        setData(response.data.products)
    }
    useEffect(() => {
        fetchData();
    }, [])
    // fetchData();
    return (
        <>
            <div className={`grid grid-cols-3 ${theme==="dark" ? "bg-black text-white" : "bg-white text-black"}`}>
                {data.map((p) => (

                    <div className="card w-96 shadow-sm mt-5 mb-5 border-1">
                        <figure>
                            <img
                                src={p.thumbnail}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{p.title}</h2>
                            <p>{p.description}</p>
                            <p>{p.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}

export default Products