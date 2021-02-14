import React from "react"
import Button from "@material-ui/core/Button"

const Item = (props) => {

    const randomPriceGenerator = () => Math.floor(Math.random() * 100) + 1

    return (
        <>
            <div className="item">
                <h3>Jewelry Piece Name</h3>
                <img src="/pexels-photo-965981.jpeg" alt="jewelry piece"/>
                <h5>${randomPriceGenerator()}</h5>
                <Button variant="contained" onClick={props.localUpdate}>Click to purchase</Button>
            </div>

            <div className="item">
                <h3>Jewelry Piece Name</h3>
                <img src="/pexels-photo-998521.jpeg" alt="jewelry piece"/>
                <h5>${randomPriceGenerator()}</h5>
                <Button variant="contained" onClick={props.localUpdate}>Click to purchase</Button>
            </div>

            <div className="item">
                <h3>Jewelry Piece Name</h3>
                <img src="/pexels-photo-1191536.jpeg" alt="jewelry piece"/>
                <h5>${randomPriceGenerator()}</h5>
                <Button variant="contained" onClick={props.localUpdate}>Click to purchase</Button>
            </div>

            <div className="item">
                <h3>Jewelry Piece Name</h3>
                <img src="/pexels-photo-1670723.jpeg" alt="jewelry piece"/>
                <h5>${randomPriceGenerator()}</h5>
                <Button variant="contained" onClick={props.localUpdate}>Click to purchase</Button>
            </div>
        </>
    )
}

export default Item