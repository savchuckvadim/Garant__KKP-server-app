import {
    connect
} from "react-redux"
import { dealFieldActionCreator } from "../../../redux/redusers/deal/field-reducer"
import Field from "./deal-field"



const mapStateToProps = (state) => {

    return {
        state: state
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
changeCurrentField : (currentComplect, infoblocks, er, lt, freeBlocks) => {
    let action = dealFieldActionCreator(currentComplect, infoblocks, er, lt, freeBlocks)
}
    }
}

export const DealFieldContainer = connect(mapStateToProps, mapDispatchToProps)(Field)