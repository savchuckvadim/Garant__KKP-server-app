import DeleteWhite from "./img/DeleteWhite.svg";
import deleteBlack from "./img/delete_black.svg";
import "./buttons.css";
import ResetButton from './reset';
import { connect } from "react-redux";


const TYPE = 'RESET'

let mapStateToProps = (state) => {
    let currentTheme = state.theme.style[state.theme.indexOfTheme]

    let resetStyle = {

        color: currentTheme.color,
        // backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,
        // minWidth: '322px',
        height: '54px',
        width: '100%',
        border: '1px solid',
        borderColor: currentTheme.color,

        variant: 'light',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        textColor: currentTheme.color
    }
    let deleteIcon = DeleteWhite;
    if (!state.theme.indexOfTheme) {
        deleteIcon = deleteBlack;
    } else {
        deleteIcon = DeleteWhite;
    }
    return {
        style: resetStyle,
        deleteIcon
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        reset: () => {
            dispatch({
                type: TYPE
            })
        }
    }
}
let ResetButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ResetButton)
export default ResetButtonContainer