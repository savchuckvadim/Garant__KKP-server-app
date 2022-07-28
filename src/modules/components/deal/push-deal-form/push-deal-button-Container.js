import { connect } from "react-redux"
import DealPushButton from "./push-deal-button"


const mapStateToProps = (state) => {

    let backgroundColor = state.allComplects[state.currentComplect.number].color
    let color = state.allComplects[state.currentComplect.number].backgroundColor

    let style ={
        backgroundColor: backgroundColor,
        color: color,
       
    }
    return{
        style: style,
        name: 'Создать Сделку'
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {

    return{
       
    }
}

export const DealPushButtonContainer = connect(mapStateToProps, mapDispatchToProps)(DealPushButton)