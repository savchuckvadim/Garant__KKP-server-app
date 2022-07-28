import { connect } from "react-redux"
import Main from "./main"

let mapStateToProps = (state) => {
    let currentTheme = state.theme.style[state.theme.indexOfTheme];
    return {
        currentComplect: state.currentComplect,
        className: currentTheme.currentMainClass,
        modal: state.modal.show
    }
}
let mapDispatchToProps = (dispatch) => {

    return {

    }
}

let MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer