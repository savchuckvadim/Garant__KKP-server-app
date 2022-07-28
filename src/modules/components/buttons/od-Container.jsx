
import "./buttons.css"
import { odChangeActionCreator } from "../../redux/redusers/od-reducer";
import ODButtons from "./od";
import { connect } from "react-redux";
import { goodsActionCreator } from "../../redux/redusers/deal/goods-reducer";




let mapStateToProps = (state) => {
  let currentComplect = state.currentComplect
  let allOds = state.od.names
  let currentTheme = state.theme.style[state.theme.indexOfTheme]
  let odClassName = currentTheme.currentMainClass
  let currentOd = state.od.currentOd
  const style = {
    height: 54,
    backgroundColor: currentTheme.backgroundColor,
    color: currentTheme.color


  }
  let typeOfContract = state.typeOfContract.value.typeOfGood

  return {
    currentComplect,
    allOds,
    odClassName,
    currentOd,
    style,
    typeOfContract

  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    odChange : (name, names, currentComplect, numberOfComplect, index, typeOfContract) => { 
      const actionOd = odChangeActionCreator(name, names, currentComplect)
      const actionGoods = goodsActionCreator(numberOfComplect, index, typeOfContract)
      dispatch(actionOd)
      dispatch(actionGoods)
    }
  }
}
const ODButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(ODButtons)
export default ODButtonsContainer