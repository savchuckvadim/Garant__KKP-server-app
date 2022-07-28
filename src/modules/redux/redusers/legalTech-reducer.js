const CHANGE_CURRENT_LT = 'CHANGE_CURRENT_LT'
const CREATE_COMPLECT = 'CREATE_COMPLECT'
const TYPE_OF_CONTRACT = 'TYPE_OF_CONTRACT'


let initialState = {

    'pricesOfLt': [1050, 2200, 3300],
    'ltIds': [5040, 5042, 5044],
    'currentId': null,
    'nameOfType': 'Legal Tech',
    'display': 'none',
    'status': false,
    'weightLt': 0,
    'ltIncluded': 0,
    'nameOflt': '',
    'priceOfLt': 0,
    'previousPrice' : 0,
    'value': [{
            'name': 'Аналитическая система "Сутяжник" ',
            'checked': false,
            'weight': 1,
            'description': ''
        },
        {
            'name': 'Конструктор правовых документов',
            'checked': false,
            'weight': 1,
            'description': ''
        },
        {
            'name': 'Экспресс проверка контрагентов',
            'checked': false,
            'weight': 1,
            'description': ''
        },
        {
            'name': 'Экспресс Согласование',
            'checked': false,
            'weight': 1,
            'description': ''
        },
        {
            'name': 'Экспресс тендер',
            'checked': false,
            'weight': 1,
            'description': ''
        },
        {
            'name': 'Гарант Диск',
            'checked': false,
            'weight': 1,
            'description': ''
        },
        {
            'name': 'Гарант Коннект',
            'checked': false,
            'weight': 1,
            'description': ''
        },
        {
            'name': 'Гарант Патент',
            'checked': false,
            'weight': 1,
            'description': ''
        },
        {
            'name': 'Интернет-Семианры',
            'checked': false,
            'weight': 1,
            'description': ''
        },
        {
            'name': 'ЭТАЛОННЫЙ КЛАССИФИКАТОР',
            'checked': false,
            'weight': 1,
            'description': ''
        },
        {
            'name': 'Бизнес на контроле',
            'checked': false,
            'weight': 1,
            'description': ''
        },

    ]




}





export const changeltData = (stateCome, currentComplect) => {
    let value = []
    stateCome.value.forEach(lt => {
        value.push({
            ...lt
        })
    })
    let state = {
        ...stateCome
    }
    state.value = value
    if (currentComplect) {
        value.forEach((elem, index) => {

            if (currentComplect.fillingLTIndexes.includes(index) || currentComplect.fillingPaketLT.includes(index)) {
                elem.checked = true
            } else elem.checked = false
        })

    } else {
        value.forEach((elem) => {
            elem.checked = false
        })
    }


    return state
}

export const weightLtForResult = (stateCome, currentComplect) => {
    let value = stateCome.value.map(lt => {
        return {
            ...lt
        }
    })
    let state = {
        ...stateCome
    }
    state.value = value

    if (currentComplect) {
        state.ltIncluded = 0
        state.weightLt = 0
        state.value.forEach((element, index) => { //перебираем все LT
            if (currentComplect.fillingPaketLT.includes(index)) { //если индекс перебираемого LT содержится в списке индексов входящих в комплект по умолчанию
                if (element.checked) {

                    state.weightLt = state.weightLt + element.weight
                }

            } else if (currentComplect.fillingLTIndexes.includes(index)) {
                element.checked ? state.ltIncluded++ : state.ltIncluded = state.ltIncluded - 0

            }
            state.weightLt > 0 ? state.display = 'flex' : state.display = 'none'
            if (state.weightLt === 0) {
                state.nameOflt = ''
                state.priceOfLt = ''
                state.currentId = null
            }
            if (state.weightLt === 2) {
                state.nameOflt = `Малый Пакет`
                state.priceOfLt = state.pricesOfLt[0]
                state.currentId = state.ltIds[0]
            } else if (state.weightLt === 5) {
                state.nameOflt = `Средний Пакет `
                state.priceOfLt = state.pricesOfLt[1]
                state.currentId = state.ltIds[1]
            } else if (state.weightLt === 10) {
                state.nameOflt = `Большой Пакет `
                state.priceOfLt = state.pricesOfLt[2]
                state.currentId = state.ltIds[2]
            }
            if ((state.weightLt === 1 || state.weightLt > 2) && (state.weightLt < 5 || state.weightLt > 5) && (state.weightLt < 11)) {
                state.nameOflt = `LT собран неверно`
                state.currentId = null
            }
        })

    }
    return state
}

const changeQuantityLt = (stateCome, index) => {
    let state = {
        ...stateCome
    }
    let currentIndexOfLtPrice = 0
    state.pricesOfLt.forEach((price, index) => {
        if(price === state.priceOfLt){
            currentIndexOfLtPrice = index
        }
    })
    
    
    if (index === 1) {
        state.priceOfLt = state.pricesOfLt[currentIndexOfLtPrice] * 6
    } else if (index === 2) {
        state.priceOfLt = state.pricesOfLt[currentIndexOfLtPrice] * 12
    }else {
        state.priceOfLt =  state.pricesOfLt[currentIndexOfLtPrice]
    }

    return state
}

export const changeLTFromCurrent = (state = initialState, action) => {

    let changeLt = (state) => {
        
        state = changeltData(state, action.currentComplect)
        state = weightLtForResult(state, action.currentComplect)
        return state
    }

    if (action.type === CHANGE_CURRENT_LT || action.type === CREATE_COMPLECT || action.type === 'RESET') {
        return changeLt(state)
    }
    if (action.type === TYPE_OF_CONTRACT) {
        return changeQuantityLt(state, action.index)
    }

    return state
}