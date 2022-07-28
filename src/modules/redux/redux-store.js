import { combineReducers, createStore } from 'redux';
import { currentComplect } from './redusers/currentComplect-reducer';
import { changeErAndPaketsErFromCurrent } from './redusers/enciclopedias-reducer';
import { infoblocks } from './redusers/infoblocks-reducer';
import { changeColorOfButton } from './redusers/allComplects-reducer';
import { changeLTFromCurrent  } from './redusers/legalTech-reducer';
// import { changeNameOfComplect } from './redusers/nameOfComplect-reducer';
import { oD } from './redusers/od-reducer';
import { changeDataPhone } from './redusers/phoneNumber-reducer';
// import { changePrepaid } from './redusers/prepaid-reducer';
import { priceReducer } from './redusers/price-reducer';
// import { reset } from './redusers/reset-reducer';
import { theme } from './redusers/theme-reducer';
import { result } from './redusers/result-reducer';
import { modal } from './redusers/modal-reducer';
import { resultModal } from './redusers/result-modal-reducer';
import deal from './redusers/deal-reducer';
import { totalPriceReducer } from './redusers/totalPrice-reducer';
import { prepaidReducer } from './redusers/prepaid-reducer';
import {typeOfContractReducer} from './redusers/deal/typeOfContract-reducer';
import {typeOfClientReducer} from './redusers/deal/typeOfClient-reducer';
import {supplierReducer} from './redusers/deal/supplier-reducer';
import {goodsReducer} from './redusers/deal/goods-reducer';
import {dateOfContractReducer} from './redusers/deal/datesOfContract-reducer';
import { dealFieldReducer } from './redusers/deal/field-reducer';
import { dealStatusReducer } from './redusers/deal/dealStatus-reducer';
import { dealNameReducer } from './redusers/deal/dealName-reducer';
import { dealDescriptionReducer } from './redusers/deal/description-reducer';
import { freeBlocks } from './redusers/freeBlocks-reducer';
import { consalting } from './redusers/consalting-reducer';
// import weightReducer from './redusers/weight-reduser';



// function counterReducer(state = { value: 0 }, action) {
//     switch (action.type) {
//       case 'counter/incremented':
//         return { value: state.value + 1 }
//       case 'counter/decremented':
//         return { value: state.value - 1 }
//       default:
//         return state
//     }
//   };
  

let reducers = combineReducers({
    allComplects: changeColorOfButton,
    currentComplect: currentComplect,
    infoblocks,
    freeBlocks: freeBlocks,
    consalting: consalting,
    encyclopedias: changeErAndPaketsErFromCurrent,
    legalTech : changeLTFromCurrent,
    // changeNameOfComplect, 
    od : oD,
    phoneNumber: changeDataPhone,
    // changePrepaid,
    price: priceReducer,
    totalPrice: totalPriceReducer,
    // weight: weightReducer,
    // reset,
    prepaid: prepaidReducer,
    theme: theme,
    result: result,
    modal: modal,
    resultModal: resultModal,
    deal: deal,
    typeOfContract: typeOfContractReducer,
    typeOfClient: typeOfClientReducer,
    supplier: supplierReducer,
    dateOfContract: dateOfContractReducer,
    goods: goodsReducer,
    field: dealFieldReducer,
    description: dealDescriptionReducer,
    dealStatus: dealStatusReducer,
    dealName: dealNameReducer,

    
});
let store = createStore(reducers)


 export default store