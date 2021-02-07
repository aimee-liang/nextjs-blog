import React from "react"

const Item = (props) => {

    const randomPriceGenerator = Math.floor(Math.random() * 100) + 1

    return (
        <>
            <div className="item">
                <h2>Jewelry Piece Name</h2>
                <img src="" alt=""/>
                <h5>${randomPriceGenerator}</h5>
                <button onClick={props.localUpdate}>Click to purchase</button>
            </div>
        </>
    )
}

export default Item