import './orderedItems.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function OrderedItems(props) {
    const [qty, setQty] = useState(1)
    // const [price , setPrice] = useState(props.price)
    const navigateto = useNavigate()

    const add = () => {
        setQty(qty + 1)
        // console.log(props.image);
    }

    const sub = () => {
        setQty(qty - 1)
    }

    return (
        <div className='orderedItem'>
            <div>
                <p>
                    {props.index + 1}
                </p>
            </div>
            <div className='orderedImage'>
                <img src={props.image} onClick={() => {
                    navigateto('/cart/description/' + props.id)
                }} />
            </div>

            <div style={{ width: "280px" }}>
                <p onClick={() => {
                    navigateto('/cart/description/' + props.id)
                }} className="orderedName">{props.name}</p>
            </div>

            <div className='orderedQtyBox'>
                <button onClick={sub} disabled={qty == 1} className="cartBtn decrease">-</button>
                <p className='orderedQty'>{qty}</p>
                <button onClick={add} className="cartBtn increase">+</button>
            </div>

            <div style={{ width: "100px" }}>
                <p className='cartPrice'>Rs.{qty * props.price}</p>
            </div>


            <button onClick={() => {
                props.remove(props.id)
            }} className="cartBtn decrease">X</button>
        </div>
    )
}

export default OrderedItems;