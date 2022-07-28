const GET_TOTAL_PRICE = 'GET_TOTAL_PRICE';
const INPUT_CHANGE_PRICE = 'INPUT_CHANGE_PRICE'
const CREATE_COMPLECT = 'CREATE_COMPLECT'
const CHANGE_CURRENT_OD = 'CHANGE_CURRENT_OD'
const RESET = 'RESET'


let initialState = {
    value: 0,
    status: false,
    width: 0
}


export const getTotalPriceActionCreator = () => {

    return {
        type: GET_TOTAL_PRICE,
        price,
        priceLt


    }
}

const totalPrice = (state, action) => {

    return getTotalPrice(state, action)
}
const getTotalPrice = (stateCome, action) => {

    let state = {
        ...stateCome
    }

    let totalPrice = action.price + action.priceLt
    state.value = totalPrice
    return state
}

export const totalPriceReducer = (state = initialState, action) => {

    if (action.type === GET_TOTAL_PRICE || action.type === CREATE_COMPLECT || action.type === CHANGE_CURRENT_OD) {

        return totalPrice(state, action)
    }  else {
        return state
    }
}