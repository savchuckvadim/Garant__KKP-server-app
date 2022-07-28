let initialState = 

    {
        'nameOfType': 'Без дополнительной оплаты',
        'value': [
            {
                'name': 'Прайм: законодательство, судебная практика и проекты законов',
                'checked': false,
                'weight': 0,
                'description': ''
            },
            {
                'name': 'Архивы ГАРАНТа',
                'checked': false,
                'weight': 0,
                'description': ''
            },
            {
                'name': 'База знаний службы правового консалтинга',
                'checked': false,
                'weight': 0,
                'description': ''
            },

            {
                'name': 'ГАРАНТ Консалтинг: нормативные акты и судебная практика',
                'checked': false,
                'weight': 0,
                'description': ''
            },
            
            {
                'name': 'Судебная практика: приложение к консультационным блокам',
                'checked': false,
                'weight': 0,
                'description': ''
            },
            {
                'name': 'Онлайн-архив «Практика арбитражных судов первой инстанции»',
                'checked': false,
                'weight': 0,
                'description': ''
            },
            {
                'name': 'Онлайн-архив «Практика судов общей юрисдикции»',
                'checked': false,
                'weight': 0,
                'description': ''
            },
            {
                'name': 'Онлайн-архив «Практика мировых судей»',
                'checked': false,
                'weight': 0,
                'description': ''
            },
            {
                'name': 'Онлайн-архив «Определения арбитражных судов»',
                'checked': false,
                'weight': 0,
                'description': ''
            },
            

           
        ]
    }




export const changeInfoblocksFromCurrent = (state, currentComplect) => { //меняет стэйт в соответствии с currentComplect

  

    let stateCopy = {...state}
    stateCopy.value = [...state.value]
    stateCopy.value[0] = {...state.value[0]}
    stateCopy.value[1] = {...state.value[1]}
    stateCopy.value[2] = {...state.value[2]}
    stateCopy.value[3] = {...state.value[3]}
    stateCopy.value[4] = {...state.value[4]}
    stateCopy.value[5] = {...state.value[5]}
    stateCopy.value[6] = {...state.value[6]}
    // let stateCopy_1 = [...state][1]
    // let stateCopy_2 = [...state][2]
    // let stateCopy_3 = [...state][3]
    // let stateCopy_4 = [...state][4]
    // let stateCopy = [stateCopy_0, stateCopy_1, stateCopy_2, stateCopy_3, stateCopy_4]
    if (currentComplect) {
        
        stateCopy.value.forEach((elem) => {
                

                if (!elem.checked) {
                    elem.checked = true
                } else elem.checked = false

                if (currentComplect.currentFilling.includes('Практика арбитражных судов округов') && elem.name === 'Онлайн-архив «Практика арбитражных судов первой инстанции»') {
                    elem.checked = true
                }
                if (currentComplect.currentFilling.includes('Практика судов общей юрисдикции') && elem.name === 'Онлайн-архив «Практика судов общей юрисдикции»') {
                    elem.checked = true
                }
            })


    } else {

        stateCopy.value.forEach((elem) => {

                elem.checked = false

            })
       
    }


    return stateCopy
}
const changeInfolocksFromNewComplect = (state, currentComplect) => {
    
    let stateCopy = {...state}
    stateCopy.value = [...state.value]
//     stateCopy.value[0] = {...state.value[0]}
// stateCopy.value[1] = {...state.value[1]}
// stateCopy.value[2] = {...state.value[2]}
// stateCopy.value[3] = {...state.value[3]}
// stateCopy.value[4] = {...state.value[4]}
// stateCopy.value[5] = {...state.value[5]}
// stateCopy.value[6] = {...state.value[6]}
// stateCopy.value[7] = {...state.value[7]}
// stateCopy.value[8] = {...state.value[8]}
    // let stateCopy_1 = [...state][1]
    // let stateCopy_2 = [...state][2]
    // let stateCopy_3 = [...state][3]
    // let stateCopy_4 = [...state][4]
    // let stateCopy = [stateCopy_0, stateCopy_1, stateCopy_2, stateCopy_3, stateCopy_4]
   
    if (currentComplect) {
        
        stateCopy.value.forEach((elem, index) => {
                if (currentComplect.freeBlocks.includes(index)) {
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

export const freeBlocks = (state = initialState, action) => {
    // action.type === 'CHANGE_CURRENT_INFOBLOCKS' || 
    if (action.type === 'RESET') {
        return changeInfoblocksFromCurrent(state, action.currentComplect)
    } 
    else if (action.type === 'CHANGE_BLOCKS_FROM_NEW_COMPLECT') {
        return changeInfolocksFromNewComplect(state, action.currentComplect)
        
    } 
    else{
        return state
    }

       
   
      
}