let SUPLIER = 'SUPLIER';

let initialState = {

    name: 'Поставщик',
    id: 'UF_CRM_1539338045',
    value: "",
    supliers: [
        'Индивидуальный предприниматель Савчук Анатолий Викторович',
        'Коммерческая организация',

    ]

}



export const supplierActionCreator = () => {

    return {
        type: SUPLIER
    }
}

const changeSupplier = (stateCome, action) => {

    let state = {
        ...stateCome
    }

    return state
}

export const supplierReducer = (state = initialState, action) => {

    if (action.type === SUPLIER) {
        return changeSupplier(state, action)
    }
    return state
}

