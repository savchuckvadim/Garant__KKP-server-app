import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import React from "react"
import "./prepaid.css"
const TypeOfClient = (props) => {
    let value 
     props.value  ? value = props.value.name  : value = props.value
    
    let items = []
    props.typesOfClient.forEach((type, index) => {
       
        items.push( <MenuItem  onClick={(e) => { props.changeTypeOfClient (index) }} key={`Client-item-${index}`} value={type.name}>{type.name}</MenuItem>)
    })
    let ref = React.createRef()
    
    return (
        <div className="prepaid__container">
            <FormControl fullWidth>
                <InputLabel id="deal-client-select-label">{props.name}</InputLabel>
                <Select
                    labelId="deal-client-select-label"
                    id="deal-client-select"
                    value={value}
                    label={props.name}
                    ref={ref}
                    // onChange={(e) => { props.changeTypeOfClient (e) }}
                    key={props.name}
                >
                    {items}
                </Select>
            </FormControl>
        </div>
    )
}

export default TypeOfClient

