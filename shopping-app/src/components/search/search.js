import './search.css'

import { useState } from 'react'

function Search(props) {

    const[maxPrice , setMaxPrice] = useState(1000)

    function search(event) {
        // event.preventDefault()
        props.setIsLoading(true)
        let products = []
        let filteredProducts;

        fetch('https://63106c3b826b98071a410ecf.mockapi.io/shopping').then((response)=>{
            if(response.ok){
                return response.json()
            }
            return false
        }).then((data)=>{
            products = [...data]
            filteredProducts = products.filter((item) => {
                return item.name.toLowerCase().includes(event.target.value)
            })
            props.setProductList(filteredProducts)
            props.setIsLoading(false)
        })
    }

    function filter(event){
        setMaxPrice(event.target.value)
        props.setIsLoading(true)
        let products = []
        let filteredProducts;

        fetch('https://63106c3b826b98071a410ecf.mockapi.io/shopping').then((response)=>{
            if(response.ok){
                return response.json()
            }
            return false
        }).then((data)=>{
            products = [...data]
            filteredProducts = products.filter((item) => {
                return parseInt(item.price) <= event.target.value
            })
            props.setProductList(filteredProducts)
            props.setIsLoading(false)
        })
    }

    return (
        <div className='search'>
            <div className='container'>
                <form onSubmit={search}>
                    <input type={"search"} onChange={search}placeholder="&#128269; Serach Here.." /><br/>
                    <input type="range" id="points" name="points" step={'100'} min="0" max="1000" value={maxPrice} onChange={filter}/><p>Below Rs.{maxPrice}</p>
                </form>
            </div>
        </div>
    )
}

export default Search;