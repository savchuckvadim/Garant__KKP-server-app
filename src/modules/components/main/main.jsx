import "./main.css"
import Complect from "../complect/complect"
import ResultContainer from "../result/resultContainer"
import BlocksOfInfoblocksContainer from "../infoblocks/blocksOfInfoblocks-Container"





const Main = (props) => {

    const result = () => {
        if (props.currentComplect && !props.modal) {
            return (
                <ResultContainer />
            )
        }

    }

    return (
        <div className={props.className}>
            <div className={'main'}>
                <div className={'form__complect'}>
                    <Complect />
                </div>
                <div className={'infoblocks'}>
                    <BlocksOfInfoblocksContainer />
                </div>
                {result()}
            </div>

        </div>
    )
}

export default Main