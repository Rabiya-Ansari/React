import React, { useState } from 'react'
import A from '../context/A'

const Home = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
        console.log(toggle)
    }
    return (
        <>
            {/* <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className={"text-5xl font-bold"}>Hello there</h1>
                        <div className={`${toggle ? "" : "hidden"}`}>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                        <button onClick={handleToggle} className='bg-blue-500 border-1 py-2 px-8 text-white'>Toggle</button>
                    </div>
                </div>
            </div> */}

            {/* <div className={`${toggle ? "" : "hidden"}`}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, accusamus?</p>
            </div> */}

            <A/>
        </>
    )
}

export default Home