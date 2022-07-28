import { element } from "prop-types";

const MODAL = 'MODAL';

let initialState = {
    show: false,
    className: 'btn__modal'
}

export const modalActionCreator = (show, element) => {

    return {
        type: MODAL,
        show: show,
        element
    }
}

const changeShow = (state, show, element) => {


    let className
    if (show) {
        // displayButton = 'none'
        element.className = 'btn btn__modal--invisible'
    } else {
        // displayButton = 'flex'
        element.className = 'btn btn__modal'
    }
    let newState = {
        show: show,
        className
    }
    state = newState
    return state
}

export const modal = (state = initialState, action) => {

    if (action.type === MODAL) {


        return changeShow(state, action.show, action.element)

    }
    return state
}