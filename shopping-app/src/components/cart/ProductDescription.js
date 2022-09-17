import './ProductDescription.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import loading from './loading.gif'


function ProductDescription() {
    const params = useParams()
    // console.log(params);

    const [currentProduct, setCurrentProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (currentProduct.id != params.id) {
            setIsLoading(true)
            fetch('https://63106c3b826b98071a410ecf.mockapi.io/shopping/' + params.id).then((response) => {
                if (response.ok) {
                    return response.json()
                }
                return false
            }).then((product) => {
                setCurrentProduct(product)
            }).then(() => {
                setIsLoading(false)
            })
        }
    }, [params])


    return (
        <div className='ProductDescription'>
            <div className='ProductDescription-wrapper'>

                <div className='ProductDescription-image-area'>
                    <img src={isLoading ? loading : currentProduct.image} />
                </div>
                <div className='ProductDescription-details-area'>
                    <h1>{currentProduct.name}</h1>
                    {!isLoading && <h2 style={{margin : "10px 0px" }}>{"Rs." + currentProduct.price}</h2>}
                    <p>{currentProduct.description}</p>
                </div>

            </div>
        </div>
    )
}

export default ProductDescription;