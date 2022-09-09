import './cart.css'

import { useNavigate } from "react-router-dom";


function Cart() {
    let navigateTo = useNavigate()
    return (
        <div className='cart' onClick={()=>{
            navigateTo('/cart')
        }}>
            0
        </div>
    )
}

export default Cart;