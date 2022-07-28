const DEAL_NAME = 'DEAL_NAME';
const initialState = {
    value: ''
}
export const dealNameActionCreator = (value) => {

    return {
        type: DEAL_NAME,
        value: value
    }
}

const changeDealName = (stateCome, action) => {
    let state = {
        ...stateCome
    }
    state.value = action.value
    return state
}

export const dealNameReducer = (state = initialState, action) => {

    if (action.type === DEAL_NAME) {
        return changeDealName(state, action)
    }
    return state
}