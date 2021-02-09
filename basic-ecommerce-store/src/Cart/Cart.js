import React from "react"
import CardInfo from "./CardInfo"
import CartItem from "./CartItem"

const Cart = (props) => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartTotal.length ? <p>Your cart is empty</p> : null}
            {/* display all items */}
            {cartTotal.map(item => {
                <
            })}
                {/* and possibly increase total quantity */}
            {/* calculate total */}

            <CardInfo/>
        </div>
    )
}

export default Cart