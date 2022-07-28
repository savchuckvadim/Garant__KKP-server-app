const CHANGE_CURRENT_INFOBLOCKS = 'CHANGE_CURRENT_INFOBLOCKS'
const CREATE_COMPLECT = 'CREATE_COMPLECT'
const CHANGE_CURRENT_ER = 'CHANGE_CURRENT_ER'
const CHANGE_CURRENT_LT = 'CHANGE_CURRENT_LT'
const CHANGE_CURRENT_PAKETS_ER = 'CHANGE_CURRENT_PAKETS_ER'
const DEAL_FIELD = 'DEAL_FIELD'

let initialState = {
    infoblocks: '',
    er: '',
    lt: '',
    freeBlocks: '',
    current: '',
    description: '',
    descriptionObject : {
        'UF_CRM_1514543923' : '',
        'UF_CRM_1514543946' : '',
    
        'UF_CRM_1514543902' : '',
        'UF_CRM_1514470897' : '',
    
        'UF_CRM_1514543981' : '',
        'UF_CRM_1514544016' : '',
    
        'UF_CRM_1514544048' : '',
        'UF_CRM_1514544067' : '',
    
        'UF_CRM_1514544090' : '',
        'UF_CRM_1514544106' : '',
    
        'UF_CRM_1514544145' : '',
        'UF_CRM_1514544158' : '',
       
        'UF_CRM_1514544223' : '',
        'UF_CRM_1514544239' : '',
    
    }
}
//UF_CRM_1642058636
let descriptionObject = {
    'UF_CRM_1514543923' : '',
    'UF_CRM_1514543946' : '',

    'UF_CRM_1514543902' : '',
    'UF_CRM_1514470897' : '',

    'UF_CRM_1514543981' : '',
    'UF_CRM_1514544016' : '',

    'UF_CRM_1514544048' : '',
    'UF_CRM_1514544067' : '',

    'UF_CRM_1514544090' : '',
    'UF_CRM_1514544106' : '',

    'UF_CRM_1514544145' : '',
    'UF_CRM_1514544158' : '',
   
    'UF_CRM_1514544223' : '',
    'UF_CRM_1514544239' : '',

}
let infoblocks = (array, description) => {
    let result = []


    array.forEach((elem, idx) => {
        let resultArray = ``
        let type = array[idx].nameOfType
        elem.value.forEach((element) => {

            if (element.checked) {
                resultArray += 
`
${element.name}
${element.description}
`


            }
        })
        if (resultArray) {
            // result.push(type)
            result.push(resultArray)
        }
    })
    let stringResult = ``
    result.forEach(element => {
        stringResult += `
${element}`


    })
    // stringResult += `</pre>`
    
    return (
        stringResult

    )

}
let oldlegalTech = (array) => {
    let resultArray = `<pre>`
    array.value.forEach((elem) => {
        if (elem.checked === true) {
            resultArray += `
            ${elem.name}
            `
        }
    })
    resultArray += `
    </pre>
    `
    let title
    if (resultArray.length > 0) {
        title = `${array.nameOfType}`
    }

    return (
        <div key='infoTypeWrapper-0' className="infoTypeWrapper">
            {title}
            {resultArray}
        </div>

    )
}
const enciclopedias = (currentComplect, arrayOfPakets, arrayOfEr) => {
let result = ``
let indexesOfIncludedErs = []
let paketsEr = (currentComplect, arrayOfPakets, arrayOfEr) => {
    let paketsNames = ``
    let includedOfPakets = ``
    let paketsAndFilling = ``
    if (currentComplect) {
        if (currentComplect.fillingPaketsERIndexes) {
            // if(currentComplect.fillingPaketsERIndexes.length < 2){ //если в текущем комплекте меньше двух пакетов ЭР - т.е. не Офис
                currentComplect.fillingPaketsERIndexes.forEach(paketIndex => {
                    paketsNames += `${arrayOfPakets.value[paketIndex].name}
                    `


                    arrayOfPakets.value[paketIndex].including.forEach(indexOfEr => {
//                         if(!includedOfPakets.includes(indexOfEr)){
                            
//                             includedOfPakets += `
// ${arrayOfEr.value[indexOfEr].name}</br>`
//                         }
                        if(!indexesOfIncludedErs.includes(indexOfEr)){
                           
                            indexesOfIncludedErs.push(indexOfEr)
                        }
                       
                        
                    })
                    
                    

                })
                indexesOfIncludedErs.forEach(indexOfEr => {
includedOfPakets += `
${arrayOfEr.value[indexOfEr].name}
`
                                        })
               
paketsAndFilling = `
${paketsNames}`
             
paketsAndFilling += `${includedOfPakets}`
                

            
        }
    }
    
    return paketsAndFilling
}

let er = (currentComplect, arrayOfEr, indexesOfIncludedErs) => {
    
    let result = ``
   
if(currentComplect.fillingEncyclopediasIndexes.length > 0){
    result = `
${arrayOfEr.nameOfType}
`

        arrayOfEr.value.forEach((element, index) => {
            if(element.checked === true){
                
    if(!indexesOfIncludedErs.includes(index)){
        result +=`
${element.name}
${element.description}
`
    }
    
            }
        })
    
        
}

return result
}
let paketsString = paketsEr(currentComplect, arrayOfPakets, arrayOfEr)
let erString = er(currentComplect, arrayOfEr, indexesOfIncludedErs)


result += paketsString
result += erString
// result += `/<pre>`


return result
}

let legalTech = (currentComplect, legalTech) => {
    let ltInComplect =``
    let paketLT = ``
    let fillingLt = ``
    let nameOfPaketLt = ``
    let getNameOfLt = (number) => {
if(number === 2){
    return `Малый сервисный Пакет Legal Tech`
}else if(number === 5){
    return `Средний сервисный Пакет Legal Tech`
}else if(number === 10){
    return `Большой сервисный Пакет Legal Tech`
}
return ``
    }
    nameOfPaketLt = getNameOfLt(currentComplect.fillingPaketLT.length)
    currentComplect.fillingLTIndexes.forEach(ltIndex => {
        ltInComplect += `
${legalTech.value[ltIndex].name}`
    })
if(currentComplect.fillingPaketLT){
    paketLT = `

${nameOfPaketLt}`
    currentComplect.fillingPaketLT.forEach(ltIndex => {
        paketLT += `
${legalTech.value[ltIndex].name}`
    })
}
fillingLt = `${ltInComplect}`
fillingLt += `${paketLT}`
return fillingLt
}
// export const dealFieldActionCreator = (currentComplect, infoblocks = 0, er = 0, lt = 0, freeBlocks = 0) => {


//     return {
//         type: DEAL_FIELD,
//         infoblocks,
//         er,
//         lt,
//         freeBlocks,
//         currentComplect
//     }
// }

const changeFieldOld = (stateCome, action) => {

    let infoblocksString = ''
    let erString = ''
    let ltString = ''

    let state = {
        ...stateCome
    }
    if (action.infoblocks) {
        infoblocksString = infoblocks(action.infoblocks, false)
        
    }
    if (action.er) {
        erString = enciclopedias(action.currentComplect, action.er[0], action.er[1])
    }
    if (action.lt) {
        ltString = legalTech(action.currentComplect, action.lt)
    }



    state.infoblocks = infoblocksString
    state.er = erString
    state.lt = ltString
   
    state.current = `
    ${infoblocksString}
    ${erString}
    ${ltString}
    
    `
  state.description = {
    'UF_CRM_1642058636[0]': 'Законодательство',
    'UF_CRM_1642058636[1]': 'Opisanie'

  }
    return state
}

let blockWork = (element, allBlocks, state) => {
    element.value.forEach(block => {
        if(block.checked){
            allBlocks.push(block.name)
            allBlocks.push(block.description)
            state.descriptionObject.UF_CRM_1514543923 = block.name
            state.descriptionObject.UF_CRM_1514543946 = block.description

        }
    })
}
const changeField = (stateCome, action) => {
    let state = {
        ...stateCome
    }

    let allBlocks = []

    action.infoblocks.forEach(element => {
        blockWork (element, allBlocks, state)
    })

    // blockWork (action.er[0], allBlocks)
    blockWork (action.er[1], allBlocks, state)
    blockWork (action.lt, allBlocks, state)



    // allBlocks.push([...action.infoblocks.value])
    // allBlocks.push([...action.er[0]])
    // allBlocks.push([...action.er[1]])
    // allBlocks.push([...action.lt])
    // allBlocks.push([...action.infoblocks.value])
    state.description = allBlocks
    state.descriptionObject = {
        'UF_CRM_1514543923' : allBlocks[0],
        'UF_CRM_1514543946' : allBlocks[1],
    
        'UF_CRM_1514543902' : allBlocks[2],
        'UF_CRM_1514470897' : allBlocks[3],
    
        'UF_CRM_1514543981' : allBlocks[4],
        'UF_CRM_1514544016' : allBlocks[5],
    
        'UF_CRM_1514544048' : allBlocks[6],
        'UF_CRM_1514544067' : allBlocks[7],
    
        'UF_CRM_1514544090' : allBlocks[8],
        'UF_CRM_1514544106' : allBlocks[9],
    
        'UF_CRM_1514544145' : allBlocks[10],
        'UF_CRM_1514544158' : allBlocks[11],
       
        'UF_CRM_1514544223' : allBlocks[12],
        'UF_CRM_1514544239' : allBlocks[13],
    
    }
    return state
}

// const changeDescription = (stateCome, action) => {

//     let infoblocksString = ''
//     let erString = ''
//     let ltString = ''

//     let state = {
//         ...stateCome
//     }
//     if (action.infoblocks) {
//         infoblocksString = infoblocks(action.infoblocks, true)
        
//     }
//     // if (action.er) {
//     //     erString = enciclopedias(action.currentComplect, action.er[0], action.er[1])
//     // }
//     // if (action.lt) {
//     //     ltString = legalTech(action.currentComplect, action.lt)
//     // }



//     let inf = infoblocksString
//     // let er = erString
//     // let lt = ltString
   
//     state.description = `
//     ${infoblocksString}
    
    
//     `
//   console.log(state.description)
//     return state
// }
// const changeFieldAndDescription = (state, action) => {
//     changeField(state, action);
//     return changeDescription(state, action);
// }
export const dealDescriptionReducer = (state = initialState, action) => {

    if (action.type === DEAL_FIELD) {  
        return changeField(state, action);
    }
    return state
}