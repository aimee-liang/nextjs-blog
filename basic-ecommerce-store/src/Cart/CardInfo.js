import React, {useState} from 'react'
import {useQuery} from "react-query"


const CardInfo = () => {

    const [payment, setPayment] = useState([])

    React.useEffect(function effectFunction(){
        async function fetchStripe() {
            const response = await fetch("https://api.stripe.com")
            const json = await response.json()
            setPayment(json.data)
        }
        fetchStripe()
    }, [])

    
    return(
        <>
            {/* fetch api here */}
        </>
    )
}

export default CardInfo