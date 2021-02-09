import React from "react"

const CartItem = (props) => {
    return(
        <>
            <div className = "cart-item">
                <img alt={props.item.name} src={props.item.image} />
                <h3>{props.item.name}</h3>
                <h4>{props.item.price}</h4>
            </div>
        </>
    )
}

export default CartItem