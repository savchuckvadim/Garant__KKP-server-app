let initialState = 

    {
        'nameOfType': 'Правовая Поддержка',
        'value': [
            {
                'name': 'Горячая Линия',
                'checked': false,
                'weight': 0,
                'description': ''
            },
            {
                'name': 'Советы экспертов. Проверки, налоги, право',
                'checked': false,
                'weight': 0,
                'description': ''
            },
            {
                'name': 'Правовой консалтинг. Премиум',
                'checked': false,
                'weight': 0,
                'description': ''
            },


        ]
    }




export const changeInfoblocksFromCurrent = (state, currentComplect) => { //меняет стэйт в соответствии с currentComplect

  
    let stateCopy = {...state}
    // let stateCopy_1 = [...state][1]
    // let stateCopy_2 = [...state][2]
    // let stateCopy_3 = [...state][3]
    // let stateCopy_4 = [...state][4]
    // let stateCopy = [stateCopy_0, stateCopy_1, stateCopy_2, stateCopy_3, stateCopy_4]
    // if (currentComplect) {
        
    //     stateCopy.value.forEach((elem) => {
                

    //             if (!elem.checked) {
    //                 elem.checked = true
    //             } else elem.checked = false

    //             if (currentComplect.currentFilling.includes('Практика арбитражных судов округов') && 'Онлайн-архив «Практика арбитражных судов первой инстанции»') {
    //                 elem.checked = true
    //             }
    //             if (currentComplect.currentFilling.includes('Практика судов общей юрисдикции') && 'Онлайн-архив «Практика судов общей юрисдикции»') {
    //                 elem.checked = true
    //             }
    //         })


    // } else {

    //     stateCopy.value.forEach((elem) => {

    //             elem.checked = false

    //         })
       
    // }
    stateCopy.value.forEach((elem) => {
        elem.checked = false
    })

    return stateCopy
}
const changeInfolocksFromNewComplect = (state, currentComplect) => {
    
    let stateCopy = {...state}
    stateCopy.value = [...state.value]
    stateCopy.value[0] = {...state.value[0]}
stateCopy.value[1] = {...state.value[1]}
stateCopy.value[2] = {...state.value[2]}
    if (currentComplect) {
       
        stateCopy.value.forEach((elem, index) => {
                if (currentComplect.consalting.includes(index)) {
                    elem.checked = true
                } else{
                    elem.checked = false
                }

                // if (currentComplect.name === 'Предприятие PRO' && elem.name === 'Справочник промышленника') {
                //     elem.checked = true
                // }
            })
       

    } else {

        stateCopy.value.forEach((elem) => {

                elem.checked = false

            })
        
    }
   
    return stateCopy
}

export const consalting = (state = initialState, action) => {
    
    if (action.type === 'RESET') {
        return changeInfoblocksFromCurrent(state, action.currentComplect)
    } else if (action.type === 'CHANGE_BLOCKS_FROM_NEW_COMPLECT') {
        return changeInfolocksFromNewComplect(state, action.currentComplect)
        
    } else{
        return state
    }
        
}