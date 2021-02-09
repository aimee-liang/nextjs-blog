import React from "react"
import CardInfo from "./CardInfo"
import CartItem from "./CartItem"

const Cart = (props) => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {props.cartTotal.length ? <p>Your cart is empty</p> : null}
            {/* display all items */}
            {props.cartTotal.map((item, index) => {
                <CartItem
                    key = {index}
                    item = {item}
                    />
            })}
                {/* and possibly increase total quantity */}
            {/* calculate total */}

            <CardInfo/>
        </div>
    )
}

export default Cart