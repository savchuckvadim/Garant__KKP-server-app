const INPUT_CHANGE_PREPAID = 'INPUT_CHANGE_PREPAID';

let initialState = {
    
        value: 1,
        placeholder: 'Минимальный аванс 1 месяц',
        status: false,
        width: 0, 
        prof: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        abon: ['Абонент 6 месяцев', 'Абонент 12 месяцев']
  
}
export const prepaidActionCreator = (value) => {

    return {
        type: INPUT_CHANGE_PREPAID,
        value: value
    }
}
const changePrepaid = (stateCome, action) => {
    let state = {
        ...stateCome
    }
    state.value = action.value
    return state
}
export const prepaidReducer = (state = initialState, action) => {

    if (action.type === INPUT_CHANGE_PREPAID) {

        return changePrepaid(state, action)
    }

    
    return state

}