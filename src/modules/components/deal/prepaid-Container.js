import {
    connect
} from "react-redux"
import {
    prepaidActionCreator
} from "../../redux/redusers/prepaid-reducer"
import Prepaid from "./prepaid"

const mapStateToProps = (state) => {


    return {
        value: state.prepaid.value,
        itemsProf: state.prepaid.prof,
        itemsAbon: state.prepaid.abon

    }
}
const mapDispatchToProps = (dispatch) => {

    const change = (value) => {
        let action = prepaidActionCreator(value.target.value)
        dispatch(action)
    }
    return {
        change
    }
}

export const PrepaidContainer = connect(mapStateToProps, mapDispatchToProps)(Prepaid)