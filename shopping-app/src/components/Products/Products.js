import './Products.css'

import Product from './Product'

function Products() {

    const products = [
        {
            name: "iuhsdc",
            price: 1233
        },
        {
            name: "iuhsdc",
            price: 1233
        },
        {
            name: "iuhsdc",
            price: 1233
        },
        {
            name: "iuhsdc",
            price: 1233
        },
        {
            name: "iuhsdc",
            price: 1233
        },
        {
            name: "iuhsdc",
            price: 1233
        }
    ]

    return (
        <div className="products">
            <div className="container">
                <div className="ProductsWrapper">
        {
            products.map((product)=>{
               return <Product name={product.name} price={product.price}></Product>
            })
        }
                </div>
            </div>
        </div>
    )
}

export default Products;