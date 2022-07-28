import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import "./prepaid.css"

const Prepaid = (props) => {
    return (
       <div className="prepaid__container">
          <FormControl  fullWidth>
        <InputLabel id="deal-prepaid-select-label">Аванс</InputLabel>
        <Select
          labelId="deal-prepaid-select-label"
          id="deal-prepaid-select"
          value={props.value}
          label="Аванс"
          onChange={(e) => {props.change(e)}}
        >
          <MenuItem value={props.itemsProf[0]}>{props.itemsProf[0]}</MenuItem>
          <MenuItem value={props.itemsProf[1]}>{props.itemsProf[1]}</MenuItem>
          <MenuItem value={props.itemsProf[2]}>{props.itemsProf[2]}</MenuItem>
          <MenuItem value={props.itemsProf[3]}>{props.itemsProf[3]}</MenuItem>
          <MenuItem value={props.itemsProf[4]}>{props.itemsProf[4]}</MenuItem>
          <MenuItem value={props.itemsProf[5]}>{props.itemsProf[5]}</MenuItem>
          <MenuItem value={props.itemsProf[6]}>{props.itemsProf[6]}</MenuItem>
          <MenuItem value={props.itemsProf[7]}>{props.itemsProf[7]}</MenuItem>
          <MenuItem value={props.itemsProf[8]}>{props.itemsProf[8]}</MenuItem>
          <MenuItem value={props.itemsProf[9]}>{props.itemsProf[9]}</MenuItem>
          <MenuItem value={props.itemsProf[10]}>{props.itemsProf[10]}</MenuItem>
          <MenuItem value={props.itemsProf[11]}>{props.itemsProf[11]}</MenuItem>
          <MenuItem value={props.itemsAbon[0]}>{props.itemsAbon[0]}</MenuItem>
          <MenuItem value={props.itemsAbon[1]}>{props.itemsAbon[1]}</MenuItem>
        </Select>
      </FormControl> 
       </div> 
    )
}

export default Prepaid

