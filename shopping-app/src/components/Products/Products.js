import './Products.css'
import Product from './Product'
import Search from '../search/search'
import { useState, useEffect } from 'react'
import loadingImg from './loading.gif'

import { useNavigate } from 'react-router-dom'


function Products() {

    // const [add , setAdd] = useState(props.add)

    const navigateTo = useNavigate()

    const [productList, setProductList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [showSearch, setShowSearch] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://63106c3b826b98071a410ecf.mockapi.io/shopping').then((response) => {
            // console.log(response);
            if (response.ok) {
                return response.json()
            }else if(response.status == 404){
                navigateTo("*")
                return false
            }
        }).then((data) => {
            setProductList([...data])
        }).then(() => {
            setIsLoading(false)
        })
    }, [])

    return (
        <div className="products">
            <div className="container">
                <div className='filterBtnArea'>
                <button onClick={()=>{
                    setShowSearch(!showSearch)
                }} className="filterBtn">{showSearch?"Hide Filters":"Show Filters"}</button>
                </div>
                {
                    showSearch&&<Search productList={productList} setIsLoading={setIsLoading} setProductList={setProductList}></Search>
                }
                <div className="ProductsWrapper">
                    {!isLoading && (productList.length == 0 && <p style={{textAlign : "center"}}>No Products Found</p>)}
                    {
                        !isLoading && productList.map((product) => {
                            // console.log(i);
                            return <Product key={product.id}
                                product={product}>
                            </Product>
                        })
                    }
                    {isLoading && <img className='loading' src={loadingImg} />}
                </div>
            </div>
        </div>
    )
}

export default Products;

