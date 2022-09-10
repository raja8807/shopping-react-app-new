import './cart.css'

import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react'


function Cart(props) {
    let navigateTo = useNavigate()

    const [added, setAdded] = useState([...props.added])

    useEffect(()=>{
        setAdded([...props.added])
    },[props])

    return (
        <div className='cart' onClick={()=>{
            navigateTo('/cart')
        }}>
            <div className='cartNum'>{added.length}</div>
            <p className='cartIcon'>&#128722;</p>
        </div>
    )
}

export default Cart;