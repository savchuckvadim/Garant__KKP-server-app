let DATES_OF_CONTRACT = 'DATES_OF_CONTRACT';

let initialState = {

    dateOfСontract: {
        name: 'Дата договора (договор от)',
        id: 'UF_CRM_1541572604',
        value: ""
    },
    dateFrom: {
        name: 'Срок действия договора с:',
        id: 'UF_CRM_1537761509',
        value: ""
    },
    dateTo: {
        name: 'по:',
        id: 'UF_CRM_1537761541',
        value: ""
    }

}



export const dateOfContractActionCreator = () => {

    return {
        type: DATES_OF_CONTRACT
    }
}

const changeDateOfContract = (stateCome, action) => {

    let state = {
        ...stateCome
    }

    return state
}

export const dateOfContractReducer = (state = initialState, action) => {

    if (action.type === DATES_OF_CONTRACT) {
        return changeDateOfContract(state, action)
    }
    return state
}

