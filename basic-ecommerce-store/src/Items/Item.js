import React from "react"

const Item = () => {

    const randomPriceGenerator = Math.floor(Math.random() * 100) + 1

    return (
        <>
            <div className="item">
                <h2>Jewelry Piece Name</h2>
                <img src="" alt=""/>
                <h5>${randomPriceGenerator}</h5>
            </div>
        </>
    )
}

export default Item