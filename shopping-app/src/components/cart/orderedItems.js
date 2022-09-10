import './orderedItems.css'
import {useState} from 'react'

function OrderedItems(props) {
    const [qty , setQty] = useState(1)
    // const [price , setPrice] = useState(props.price)

    const add = ()=>{
        setQty(qty+1)
        console.log(props.image);
    }

    const sub = ()=>{
        setQty(qty-1)
    }

    function remove(){
        props.remove(props.id)
        // console.log(props.id);
    }

    return (
        <div className='orderedItem'>
            <div className='orderedImage'>
<img src={props.image}/>
            </div>

            <p>{props.name}</p>

            <div className='orderedQtyBox'>
                <button onClick={sub} disabled={qty==1}>-</button>
                <p className='orderedQty'>{qty}</p>
                <button onClick={add}>+</button>
            </div>
            <p>{qty * props.price}</p>

            <button onClick={remove}>X</button>
        </div>
    )
}

export default OrderedItems;