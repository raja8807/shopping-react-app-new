import './Product.css'
import { useState } from 'react'

import { useContext } from 'react'
import { AppContexts } from '../context'

function Product(props) {

    // const [ordered, setOrdered] = useState("hi")

    const add = useContext(AppContexts).addToCart
    function addToCart() {
        add(props.product)
    }

    return (
        <div className="product">
            <div className="productImage">
                <img src={props.image} />
            </div>
            <div className="productDetails">
                <h1>{props.name}</h1>
                <h2>{props.price}</h2>
                <button onClick={() => {
                    
                    addToCart();
                }}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product;