

const Price = (props) => {

let currentPrice = props.price.currentPrice.value
    return (
       
        <span key="price" className="styleText">{currentPrice}</span>
    )
}

export default Price