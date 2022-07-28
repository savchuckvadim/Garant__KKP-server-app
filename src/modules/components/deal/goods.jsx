import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import "./prepaid.css"
const TypeOfContract = (props) => {
    let items = []
    props.typesOfContract.forEach(type => {
       
        items.push( <MenuItem key={type} value={type}>{type}</MenuItem>)
    })
    
    return (
        <div className="prepaid__container">
            <FormControl required fullWidth>
                <InputLabel id="deal-contract-select-label">{props.name}</InputLabel>
                <Select
                    labelId="deal-contract-select-label"
                    id="deal-contract-select"
                    value={props.value}
                    label={props.name}
                    onChange={(e) => { props.changeTypeOfContract (e) }}
                >
                    {items}
                </Select>
            </FormControl>
        </div>
    )
}

export default TypeOfContract

