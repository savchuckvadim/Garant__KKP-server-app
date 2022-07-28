import {
    connect
} from "react-redux"
import Included from "./deal-Included"


const mapStateToProps = (state) => {

    return {
        state: state
    }
}
const mapDispatchToProps = (dispatch) => {

    return {

    }
}

export const DealIncludedContainer = connect(mapStateToProps, mapDispatchToProps)(Included)