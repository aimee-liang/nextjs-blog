import React from "react"
import Button from "@material-ui/core/Button"

const CartItem = (props) => {

    const localRemove = () => {
        console.log(props.calculateTotal)
    }

    return(
        <>
            <div className="cart-item">
                <img alt={props.item.name} src={props.item.image} />
                <h3>{props.item.name}</h3>
                <h4>{props.item.price}</h4>
                <Button onClick={localRemove}>🗑️ Remove From Cart</Button>
                {/* button to increase quantity */}
                <Button variant="contained" color="primary">+</Button>
                {/* button to decrease quantity */}
            </div>
        </>
    )
}

export default CartItem