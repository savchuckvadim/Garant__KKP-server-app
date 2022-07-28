
import { Button} from "@material-ui/core"
import React from "react"
import { Link, NavLink } from "react-router-dom"
import ResultModalButtonContainer from "../buttons/modal/result-modal-Container"
import ItemResult from "./items-result"
import "./result.css"
// import "../main/main.css"

const Result = (props) => {

 
    let containerStyle = {
        borderColor: 'rgb(160, 179, 179)',        
    }

        return (
            <div id="" style={containerStyle} className="result__container">
                <div className="information">
                    <ItemResult values={props.values} state={props.state} textLt="textLt" styleText="text" styleSpanResult="spanResult" />
      
                    {/* <p className="text"> <NavLink className="text" as={Link} to="/description"> Описание комплекта </NavLink></p> */}
                </div>
                {/* <NavLink className="result__text btn btn-primary result__btn" style={props.values.styleResult} as={Button} to="/deal">Выбрать комплект</NavLink> */}
                <ResultModalButtonContainer/>

            </div>
        )
    
}

export default Result