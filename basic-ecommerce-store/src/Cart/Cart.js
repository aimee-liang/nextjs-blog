import React from "react"
import CardInfo from "./CardInfo"

const Cart = () => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {/* if there is nothing in the cart, display "Your cart is empty" */}
            {/* display all items */}
                {/* and possibly increase total quantity */}
            {/* calculate total */}

            <CardInfo/>
        </div>
    )
}

export default Cart