let TYPE_OF_CLIENT = 'TYPE_OF_CLIENT';

let initialState = {

    name: 'Тип клиента',
    id: 'UF_CRM_1540190412',
    value: "",
    typesOfClient:

        [{
                id: '1919',
                name: 'Бюджетная организация'
            },
            {
                id: '1921',
                name: 'Коммерческая организация'
            },
            {
                id: '1923',
                name: 'Индивидуальный предприниматель'
            },
            {
                id: '1925',
                name: 'Физ.лицо'
            },

        ]

}



export const typeOfClientActionCreator = (index) => {

    return {
        type: TYPE_OF_CLIENT,
        index: index
    }
}

const changeTypeOfClient = (stateCome, action) => {

    
    let state = {
        ...stateCome
    }
    state.value = state.typesOfClient[action.index]
    return state
}

export const typeOfClientReducer = (state = initialState, action) => {

    if (action.type === TYPE_OF_CLIENT) {
        return changeTypeOfClient(state, action)
    }
    return state
}