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
    consalting:'',
    current: '',
    description: ''
}

let infoblocks = (array) => {
    let result = []


    array.forEach((elem, idx) => {
        let resultArray = ``
        let type = array[idx].nameOfType
        elem.value.forEach((element) => {

            if (element.checked) {
                resultArray += 
`${element.name}
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
        stringResult += `${element}
        `


    })
    // stringResult += `</pre>`
    
    return (
        stringResult

    )

}

let blockOfInfoblock = (array) => {
    let resultArray = ``
    array.value.forEach((element) => {

        if (element.checked) {
            resultArray += 
`${element.name}
`


        }
    })
    
    
return resultArray
}
let oldlegalTech = (array) => {
    let resultArray = ``
    array.value.forEach((elem) => {
        if (elem.checked === true) {
            resultArray += `
            ${elem.name}
            `
        }
    })
    resultArray += ``
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
includedOfPakets += `${arrayOfEr.value[indexOfEr].name}
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
${arrayOfEr.nameOfType}`

        arrayOfEr.value.forEach((element, index) => {
            if(element.checked === true){
                
    if(!indexesOfIncludedErs.includes(index)){
        result +=`
${element.name}`
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
export const dealFieldActionCreator = (currentComplect, infoblocks = 0, er = 0, lt = 0, freeBlocks = 0, consalting = 0) => {


    return {
        type: DEAL_FIELD,
        infoblocks,
        er,
        lt,
        freeBlocks,
        consalting,
        currentComplect
    }
}

const changeField = (stateCome, action) => {

    let infoblocksString = ''
    let erString = ''
    let ltString = ''
    let freeBlocks = ''
    let consalting = ''

    let state = {
        ...stateCome
    }
    if (action.infoblocks) {
        infoblocksString = infoblocks(action.infoblocks)
        
    }
    if (action.er) {
        erString = enciclopedias(action.currentComplect, action.er[0], action.er[1])
    }
    if (action.lt) {
        ltString = legalTech(action.currentComplect, action.lt)
    }
    if (action.freeBlocks) {
        freeBlocks =  blockOfInfoblock(action.freeBlocks)
    }
    if (action.consalting) {
        consalting =  blockOfInfoblock(action.consalting)
    }



    state.infoblocks = infoblocksString
    state.er = erString
    state.lt = ltString
    state.freeBlocks = freeBlocks
    state.consalting = consalting
   
    state.current = `
    ${infoblocksString}
    ${erString}
    ${ltString}
    ${consalting}
    `
  
    return state
}
const changeDescription = (stateCome, action) => {

    let infoblocksString = ''
    let erString = ''
    let ltString = ''

    let state = {
        ...stateCome
    }
    if (action.infoblocks) {
        infoblocksString = infoblocks(action.infoblocks, true)
        
    }
    // if (action.er) {
    //     erString = enciclopedias(action.currentComplect, action.er[0], action.er[1])
    // }
    // if (action.lt) {
    //     ltString = legalTech(action.currentComplect, action.lt)
    // }



    let inf = infoblocksString
    // let er = erString
    // let lt = ltString
   
    state.description = `
    ${infoblocksString}
        `
    return state
}
const changeFieldAndDescription = (state, action) => {
    changeField(state, action);
    return changeDescription(state, action);
}
export const dealFieldReducer = (state = initialState, action) => {

    if (action.type === DEAL_FIELD) {
        return changeField(state, action);
    }
    
    return state
}