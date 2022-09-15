import './cartScreen.css'
import { useEffect } from 'react';
import OrderedItems from './orderedItems'

import { useContext } from 'react'
import { AppContexts } from '../context'
import { Outlet, useNavigate } from 'react-router-dom';

function CartScreen(props) {

    const navigateto = useNavigate()
    const cartItems = useContext(AppContexts).cartItems
    const clearCart = useContext(AppContexts).clearCart

    useEffect(() => {
        if (cartItems.length == 0) {
            navigateto('/cart')
        }
    }, [cartItems])

    return (
        <div className='cartScreen'>
            <div className='container'>
                <Outlet></Outlet>
                {
                    cartItems.length == 0 && <p>Nothing</p>
                }
                {
                    cartItems.map((item,i) => {
                        return <OrderedItems
                            index = {i}
                            key={Math.random()}
                            name={item.name} price={item.price}
                            remove={props.remove} id={item.id}
                            image={item.image}>
                        </OrderedItems>
                    })
                }

                <div className='orderNowBox'>
                    <button onClick={() => {
                        clearCart()
                    }}>Clear Cart</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen;