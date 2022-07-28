import { connect } from "react-redux";
import { modalActionCreator } from "../../../redux/redusers/modal-reducer";
import ModalButton from "./modal";


const mapStateToProps = (state) => {
    //styleTheme
    //styleBtnModal
    //currentColor
    //currentComplect
    //currentTheme
    let show = state.modal.show
   
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
        color: currentTheme.color,
        border: '1px solid',
        borderColor: currentTheme.color,
      
    }
    let title = currentComplect ? currentComplect.name : 'Выберите комплект'
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
            let actionClose = modalActionCreator(false, element.current)

            
           return dispatch(actionClose)
        },
        handleShow : (element) => {
            let actionShow = modalActionCreator(true, element.current)


            return dispatch(actionShow)
        }
    }
}

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(ModalButton)

export default ModalContainer