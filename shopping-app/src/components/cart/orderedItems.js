import './orderedItems.css'

function OrderedItems() {
    return (
        <div className='orderedItem'>
            <div className='orderedImage'>

            </div>

            <p>Product Name</p>

            <div className='orderedQtyBox'>
                <button>-</button>
                <p className='orderedQty'>0</p>
                <button>+</button>
            </div>

            <p>Price</p>

            <button>X</button>
        </div>
    )
}

export default OrderedItems;