import {
    connect
} from "react-redux"
import Deal from "./deal"


const mapStateToProps = (state) => {

    return {
        status: state.dealStatus.isFetching
    }
}
const mapDispatchToProps = (dispatch) => {

    return {

    }
}

const DealContainer = connect(mapStateToProps, mapDispatchToProps)(Deal)

export default DealContainer