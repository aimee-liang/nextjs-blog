import React, {useState} from 'react'
import {useQuery} from "react-query"


const fetchStripe = async () => {
    await (await fetch ("https://api.stripe.com")).json()
}
const CardInfo = () => {

    const [stripe, setStripe] = useState(false) 
    const [payment, setPayment] = useState([])
    
    return(
        <>
            {/* fetch api here */}

        </>
    )
}

export default CardInfo