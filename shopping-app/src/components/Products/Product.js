import './Product.css'

import {useState} from 'react'

function Product(props){

    // const[ordered , setOrdered] = useState(false)

    function addToCart(){
        const item = {
            id : props.id,
            name : props.name,
            price : props.price,
            image : props.image
        }
        props.add(item)
    }

    return (
        <div className="product">
            <div className="productImage">
<img src={props.image}/>
            </div>
            <div className="productDetails">
                <h1>{props.name}</h1>
                <h2>{props.price}</h2>
                <button onClick={()=>{
                    addToCart();
                }}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product;