import { connect } from "react-redux";
import { modalActionCreator } from "../../../redux/redusers/modal-reducer";
import { resultModalActionCreator } from "../../../redux/redusers/result-modal-reducer";

import ResultModalButton from "./result-modal";


const mapStateToProps = (state) => {
    //styleTheme
    //styleBtnModal
    //currentColor
    //currentComplect
    //currentTheme
    let show = state.resultModal.show
   
    let currentComplect = state.currentComplect
    let currentTheme = state.theme.style[state.theme.indexOfTheme]

    let styleTheme = {
        color: currentTheme.color,
        backgrondColor: currentTheme.backgrondColor
    }
    const currentColor = () => {
        let color = currentTheme.backgroundColor
        if (currentComplect) {
            state.allComplects.forEach(element => {
                if (element.name === currentComplect.name) {
                    color = element.color
                }
            })
        }
        return color
    }
    const styleBtnModal = {
        backgroundColor: currentColor(),
        color: "white",
        border: '0px solid',
        borderColor: currentTheme.color,
      
    }
    let title = 'Выбрать комплект'
    return {
        currentComplect,
        currentTheme,
        styleTheme,
        // styleBtnModal,
        title,
        allComplects: state.allComplects,
        styleBtnModal,
        show,
        


    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        handleClose : (element) => {
            let actionClose = resultModalActionCreator(false, element.current)

            
           return dispatch(actionClose)
        },
        handleShow : (element) => {
            let actionShow = resultModalActionCreator(true, element.current)


            return dispatch(actionShow)
        }
    }
}

const ResultModalButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ResultModalButton)

export default ResultModalButtonContainer