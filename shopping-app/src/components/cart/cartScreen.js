import './cartScreen.css'
import { useState , useEffect } from 'react';
import OrderedItems from './orderedItems'

import {useContext} from 'react'
import {AppContexts} from '../context'

function CartScreen(props) {

    // const [cartItems , setCartItems] = useState([])

    const cartItems = useContext(AppContexts).cartItems

    // useEffect(()=>{
    //     setCartItems([...props.cartItems])
    //     // console.log(props.cartItems[0].id);
    //     // alert("ok")
    // },[props])


    return (
        <div className='cartScreen'>
            <div className='container'>
                {
                    cartItems.length == 0 && <p>Nothing</p>
                }
                {
                    cartItems.map((item)=>{
                        // console.log(item.id);
                        return <OrderedItems  key={Math.random()} name={item.name} price={item.price} remove={props.remove} id={item.id} image={item.image}></OrderedItems>
                    })
                }
                <div className='orderNowBox'>
<button>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen;