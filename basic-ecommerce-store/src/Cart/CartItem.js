import React from "react"
import Item from "../Items/Item"

const CartItem = (props) => {
    return(
        <>
            <div className = "cart-item">
                <h3>{props.item.name}</h3>
                <h4>{props.item.price}</h4>
            </div>
        </>
    )
}

export default CartItem