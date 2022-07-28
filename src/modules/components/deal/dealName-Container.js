import {
    connect
} from "react-redux"

import { dealNameActionCreator } from "../../redux/redusers/deal/dealName-reducer";
import DealName from "./dealName";




const mapStateToProps = (state) => {

    return {

        name: state.dealName.value

    }
}
const mapDispatchToProps = (dispatch) => {

    return {

        changeDealName: (value) => {
           
            let nameAction = dealNameActionCreator(value);
            dispatch(nameAction)
        }
        
    }
}

export const DealNameContainer = connect(mapStateToProps, mapDispatchToProps)(DealName)