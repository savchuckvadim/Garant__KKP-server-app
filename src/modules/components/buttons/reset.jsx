import Button from '@material-ui/core/Button';
import "./buttons.css";



const ResetButton = (props) => {

    let imgStyle = {
        display: 'flex'
    }

    return (
        <Button
            style={props.style}
            onClick={props.reset}
            className="btn__reset"
            type="button" >
            <div>СБРОСИТЬ</div>
            <div className="ellipseWrapper">
                <img src={props.deleteIcon} style={imgStyle} alt="delete icon" />
            </div>
        </Button>
    )
}

export default ResetButton