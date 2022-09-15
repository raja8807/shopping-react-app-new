import './Product.css'
import { useState } from 'react'

import { useContext } from 'react'
import { AppContexts } from '../context'
import {useNavigate} from 'react-router-dom'

function Product(props) {

    // const [ordered, setOrdered] = useState("hi")

    const navigateto = useNavigate()

    const add = useContext(AppContexts).addToCart
    
    function addToCart() {
        add(props.product)
    }

    return (
        <div className="product">
            <div className="productImage" onClick={()=>{
                navigateto('/cart/description/'+props.id)
            }}>
                <img src={props.image} />
            </div>
            <div style={{margin : "10px 0px"}} className="productDetails">
                <h1>{props.name}</h1>
                <h2 style={{margin : "10px 0px"}}>Rs.{props.price}</h2>
                
            </div>
            <button className='addBtn' onClick={() => {
                    addToCart();
                }}>Add To Cart</button>
        </div>
    )
}

export default Product;