import {
    connect
} from "react-redux"
import {
    resetActionCreator
} from "../../redux/redusers/currentComplect-reducer";
import {
    dealNameActionCreator
} from "../../redux/redusers/deal/dealName-reducer";
import {
    dealStatusActionCreator
} from "../../redux/redusers/deal/dealStatus-reducer";
import {
    dealFieldActionCreator
} from "../../redux/redusers/deal/field-reducer";
import {
    AddDeal
} from "./AddDeal"



const mapStateToProps = (state) => {

    let currentComplect = state.currentComplect;
    let dealField = state.field.current

    let dealStatus = state.dealStatus.isFetching
    let description = state.description.description
    let descriptionObject = state.description.description

    // let fields = []
    // let infoblocks = []

    // let erPakets = state.encyclopedias[0].value
    // let encyclopedias = state.encyclopedias[1].value

    // let legalTech = state.legalTech.value
    let price = state.price.currentPrice.value
    let goods = state.goods.currentId
    let ltGoods = state.legalTech.currentId
    let priceOfLt = state.legalTech.priceOfLt
    let backgroundColor = state.allComplects[state.currentComplect.number].color
    let color = state.allComplects[state.currentComplect.number].backgroundColor

    let styleOfPush = {
        backgroundColor: backgroundColor,
        color: color,

    }
    let styleOfCancel = {
        backgroundColor: 'red',
        color: 'white',

    }

    let freeBlocks  = state.freeBlocks.value.map(block => {
            if (block.checked) {
                return block.name
            }else{
                return ''
            }
        })
    
    return {
        typeOfContract: state.typeOfContract,
        unit: state.typeOfContract.value.units.CODE,
        typeOfClient: state.typeOfClient,
        prepaid: state.prepaid,
        priceOfComplect: price,
        goods: goods,
        ltGoods: ltGoods,
        priceOfLt: priceOfLt,
        styleOfPush,
        styleOfCancel,
        dealField,
        dealStatus: dealStatus,
        name: state.dealName.value,
        description: description,
        descriptionObject: descriptionObject,
        freeBlocks: freeBlocks



    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        reset: () => {
            let resetAction = resetActionCreator()
            return dispatch(resetAction)
        },

        changeDealStatus: (status) => {

            let statusAction = dealStatusActionCreator(status);
            dispatch(statusAction)
        },
        changeDealName: (value) => {

            let nameAction = dealNameActionCreator(value);
            dispatch(nameAction)
        }

    }
}


export const AddDealContainer = connect(mapStateToProps, mapDispatchToProps)(AddDeal)