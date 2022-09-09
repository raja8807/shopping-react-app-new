import './cartScreen.css'
import { useState } from 'react';
import OrderedItems from './orderedItems'

function CartScreen() {

    const orderedItems = [
        {
            name: "xxxx",
            price: 123
        }
    ]

    return (
        <div className='cartScreen'>
            <div className='container'>
                <OrderedItems></OrderedItems>
                <OrderedItems></OrderedItems>
                <OrderedItems></OrderedItems>
                <OrderedItems></OrderedItems>
                <div className='orderNowBox'>
<button>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen;