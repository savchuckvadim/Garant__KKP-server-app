import "./prepaid.css"
import { TextField } from '@material-ui/core';
const DealName = (props) => {
const onChange = (e) => {
    e.preventDefault()
    props.changeDealName(e.target.value)
}
    return (
        <div className="prepaid__container">
            <TextField name='title' onChange={onChange} fullWidth id="push-deal-name" label="Название Сделки" variant="outlined" value={props.name} />
        </div>
    )
}

export default DealName