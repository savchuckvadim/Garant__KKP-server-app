import { Input } from "@material-ui/core"
import React from "react"
import "./textInput.css"


const InputText = (props) => {




    let refInput = React.createRef()

    
    return (
        <Input
        name={`${props.act}-inputText`}
            key='InputText'
            align="right"
            style={props.style}
            placeholder='Garant'
            autoFocus={props.autofocus}
            ref={refInput}
            className="input"
            onChange={(e) => { props.change(e.target.value) }}
            onBlur={(e) => { props.blur(e.target.value) }}

            type="text"
            variant="standard"
            value={props.value}
            typeOfProduct={props.nameOfproduct}
            typeOfAction={props.typeOfAction}
        >

        </Input>

    )

}

export default InputText