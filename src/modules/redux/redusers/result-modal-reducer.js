import { element } from "prop-types";

const RESULT_MODAL = 'RESULT_MODAL';

let initialState = {
    show: false,
    className: 'btn__modal'
}

export const resultModalActionCreator = (show, element) => {

    return {
        type: RESULT_MODAL,
        show: show,
        element
    }
}

const changeShow = (state, show, element) => {


    let newState = {
        ...state
    }
    newState.show = show
    return newState
}

export const resultModal = (state = initialState, action) => {

    if (action.type === RESULT_MODAL) {


        return changeShow(state, action.show, action.element)

    }
    return state
}