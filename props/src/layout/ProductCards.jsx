import React from 'react'

export default function ProductCards({ image, name, description, price }) {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div className="container" style={{
                    width: 250, boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
                    padding: 10, margin: 20
                }}>
                    <img src={image} alt="" style={{ width: "100%", heigth: 200 }} />
                    <p>{name}</p>
                    <p>{description}</p>
                    <p>{price}</p>
                    <button>
                        Details
                    </button>
                </div>
            </div>
        </>
    )
}
