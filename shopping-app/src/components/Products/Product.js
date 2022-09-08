import './Product.css'

function Product(props){
    return (
        <div className="product">
            <div className="productImage">

            </div>
            <div className="productDetails">
                <h1>{props.name}</h1>
                <h2>{props.price}</h2>
            </div>
        </div>
    )
}

export default Product;