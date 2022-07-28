const DEAL_STATUS = 'DEAL_STATUS'

const inittialState ={
    isFetching: false
} 

export const dealStatusActionCreator = (status) => {

    return {
        type: DEAL_STATUS,
        status
    }
}

const changeDealStatus = (stateCome, action) => {
   
    let state = {...stateCome}
        state.isFetching = action.status
    return state
}


export const dealStatusReducer = (state = inittialState, action) => {
    if(action.type === DEAL_STATUS){
        return changeDealStatus(state, action)
    }
    return state
}