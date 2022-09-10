import './Products.css'
import Product from './Product'
import {useState, useEffect} from 'react'

import loadingImg from './loading.gif'


function Products(props) {

    // const [add , setAdd] = useState(props.add)

    const [productList, setProductList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetch('https://63106c3b826b98071a410ecf.mockapi.io/shopping').then((response)=>{
            if(response.ok){
                return response.json()
            }return false
        }).then((data)=>{
            setProductList([...data])
        }).then(()=>{
            setIsLoading(false)
        })
    },[])

    return (
        <div className="products">
            <div className="container">
                <div className="ProductsWrapper">
        {
            productList.map((product)=>{
                // console.log(i);
               return <Product key={Math.random()} 
               id={product.id} 
               name={product.name} 
               price={product.price} 
               image = {product.image}
               add={props.add}></Product>
            })
        }
        {isLoading && <img className='loading' src={loadingImg}/>}
                </div>
            </div>
        </div>
    )
}

export default Products;

