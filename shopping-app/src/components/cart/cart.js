import './cart.css'

import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react'

import {useContext} from 'react'
import {AppContexts} from '../context'

function Cart() {
    let navigateTo = useNavigate()
    const cartItems = useContext(AppContexts).cartItems

    return (
        <div className='cart' onClick={()=>{
            navigateTo('/cart')
        }}>
            <div className='cartNum'>{cartItems.length}</div>
            <p className='cartIcon'><i class="fa fa-shopping-cart"></i></p>
            {/* <i class="fa-solid fa-cart-shopping"></i> */}
            
        </div>
    )
}

export default Cart;