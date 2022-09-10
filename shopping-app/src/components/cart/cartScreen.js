import './cartScreen.css'
import { useState , useEffect } from 'react';
import OrderedItems from './orderedItems'

function CartScreen(props) {

    const [added , setAdded] = useState([])

    useEffect(()=>{
        setAdded([...props.added])
        // console.log(props.added[0].id);
        // alert("ok")
    },[props])


    return (
        <div className='cartScreen'>
            <div className='container'>
                {
                    added.length == 0 && <p>Nothing</p>
                }
                {
                    added.map((item)=>{
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