import React from "react"
import Button from "@material-ui/core/Button"

const Item = (props) => {

    const randomPriceGenerator = () => Math.floor(Math.random() * 100) + 1

    return (
        <div className="item">
            <h3>Jewelry Piece Name</h3>
            <img src="" alt=""/>
            <h5>${randomPriceGenerator()}</h5>
            <Button variant="contained" onClick={props.localUpdate}>Click to purchase</Button>
        </div>
    )
}

export default Item