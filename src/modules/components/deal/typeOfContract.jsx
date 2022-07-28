import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import "./prepaid.css"
const TypeOfContract = (props) => {
    let items = []
    
    props.typesOfContract.forEach((type, index) => {
       let value = type.typeOfGood
        items.push( <MenuItem onClick={(e) => { props.changeTypeOfContract (index, props.numberOfComplect, props.numberOfOD, value) }} key={`${index}-${type.id}`} value={type.name}>{type.name}</MenuItem>)
    })
    let ref = React.createRef()

    return (
        <div className="prepaid__container">
            <FormControl fullWidth variant="outlined">
                <InputLabel id="deal-contract-select-label">{props.name}</InputLabel>
                <Select
                    labelId="deal-contract-select-label"
                    id="deal-contract-select"
                    value={props.value.name}
                    label={props.name}
                    ref={ref}
                    // onChange={(e) => { props.changeTypeOfContract (e) }}
                >
                    {items}
                </Select>
            </FormControl>
        </div>
    )
}

export default TypeOfContract

