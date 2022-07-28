import { connect } from "react-redux"
import Price from "./price"

const mapStateToProps = (state) => {
let typeOfContract = state.typeOfContract.value.typeOfGood

    return {
        price: state.price
    }
}
const mapDispatchToProps = (dispatch) => {

    return {

    }
}

export const PriceContainer = connect(mapStateToProps, mapDispatchToProps)(Price)