import './Products.css'
import Product from './Product'

function Products() {

    const productList = [
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
            productList.map((product)=>{
               return <Product name={product.name} price={product.price}></Product>
            })
        }
                </div>
            </div>
        </div>
    )
}

export default Products;