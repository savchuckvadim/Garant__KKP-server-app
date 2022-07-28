import{ Button} from "@material-ui/core";
const DealPushButton = (props) => {


    return (

        <Button style={props.style} onClick={props.submit} variant="outlined">{props.name}</Button>
   
        
    )
}

export default DealPushButton