import React from "react"

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
                {/* trash can button to remove item altogether */}
                <button onClick={localRemove} />
                {/* button to increase quantity */}
                {/* button to decrease quantity */}
            </div>
        </>
    )
}

export default CartItem