import {
    unstable_createMuiStrictModeTheme
} from "@material-ui/core"
import {
    connect
} from "react-redux"
import {
    typeOfClientActionCreator
} from "../../redux/redusers/deal/typeOfClient-reducer"
import TypeOfClient from "./typeOfClient"

const mapStateToProps = (state) => {


    return {
        name: state.typeOfClient.name,
        id: state.typeOfClient.id,
        value: state.typeOfClient.value,
        typesOfClient: state.typeOfClient.typesOfClient


    }
}
const mapDispatchToProps = (dispatch) => {
    
    let changeTypeOfClient = (index) => {
        let action = typeOfClientActionCreator(index)
        dispatch(action)
    }
    return {
        changeTypeOfClient: changeTypeOfClient
    }
}

export const TypeOfClientContainer = connect(mapStateToProps, mapDispatchToProps)(TypeOfClient)