import './search.css'

function Search(props) {



    function search(event) {
        event.preventDefault()

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
        }).then(()=>{
            filteredProducts = products.filter((item) => {
                return item.name.includes(event.target.value)
            })
            props.setProductList(filteredProducts)
            props.setIsLoading(false)
        })

    }

    return (
        <div className='search'>
            <div className='container'>
                <form onSubmit={search}>
                    <input type={"search"} onChange={search}placeholder="&#128269; Serach Here.." />
                    {/* <input type={'submit'} value={"search"}/> */}
                </form>
            </div>
        </div>
    )
}

export default Search;