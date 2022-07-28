let TYPE_OF_CONTRACT = 'TYPE_OF_CONTRACT';

let initialState = {

    name: 'Тип договора',
    id: 'UF_CRM_1540190343',
    value: {
        id: '1913',
        name: 'Internet',
        typeOfGood: 'prof',
        units: {
            value: 'Месяц',
            ID: '11',
            CODE: '15',
        }
    },
    typesOfContract: [{
            id: '1913',
            name: 'Internet',
            typeOfGood: 'prof',
            units: {
                value: 'Месяц',
                ID: '11',
                CODE: '15',
            }


        },
        // {
        //     id: '1915',
        //     name: 'Договор услуг',
        //     typeOfGood: 'prof'
        // },
        {
            id: '3616',
            name: 'Абонентский полгода',
            typeOfGood: 'abonSix',
            units: {
                value: 'Абон. 6 мес.',
                ID: '12',
                CODE: '20',
            }
        },
        {
            id: '3616',
            name: 'Абонентский год',
            typeOfGood: 'abonEleven',
            units: {
                value: 'Абон. 12 мес.',
                ID: '14',
                CODE: '25',
            }
        },
        // {
        //     id: '3170',
        //     name: 'Лицензионный',
        //     typeOfGood: 'prof'
        // },

    ]

}



export const typeOfContractActionCreator = (index) => {

    return {
        type: TYPE_OF_CONTRACT,
        index: index
    }
}

const changeTypeOfContract = (stateCome, action) => {

    let state = {
        ...stateCome
    }
    state.value = state.typesOfContract[action.index]
  
    return state
}

export const typeOfContractReducer = (state = initialState, action) => {

    if (action.type === TYPE_OF_CONTRACT) {
        return changeTypeOfContract(state, action)
    }
    return state
}