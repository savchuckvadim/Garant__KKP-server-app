import { connect } from "react-redux"
import DealPushButton from "./push-deal-button"

const TYPE = 'RESET'
const mapStateToProps = (state) => {

    let backgroundColor = state.allComplects[state.currentComplect.number].color
    let color = state.allComplects[state.currentComplect.number].backgroundColor

    let style ={
        backgroundColor: 'red',
        color: 'white',
        

    }
    return{
        style: style,
        name: 'Отменить'
    }
}
const mapDispatchToProps = (dispatch) => {


    return{
        submit: () => {
            dispatch({
                type: TYPE
            })
        }
    }
}

export const DealCancelhButtonContainer = connect(mapStateToProps, mapDispatchToProps)(DealPushButton)