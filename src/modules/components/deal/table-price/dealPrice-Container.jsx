import { connect } from "react-redux"
import TableDeal from "./dealPrice"



const mapStateToProps = (state) => {
    let price = state.price.currentPrice.value;

    let unit = state.typeOfContract.value.units.value
    return {
        state: state,
        price: price,
        unit: unit
    }
}
const mapDispaychToProps = (dispatch) => {


    return {

    }
}

export const TableDealContainer = connect(mapStateToProps, mapDispaychToProps)(TableDeal)

