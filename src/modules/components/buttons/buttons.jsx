
import "./buttons.css"
import Button from '@material-ui/core/Button';
import React from 'react';



const ComplectButtons = (props) => {

    let buttons = [];
    props.allComplects.forEach((complect, index) => {
        buttons.push(
            <Button
                key={`btn-${index}`}
                style={props.style[index]}
                onClick={() => {
                    return props.createComplect(
                        complect, 
                        index, 
                        props.ods, 
                        props.currentOd, 
                        props.currentTheme, 
                        props.numberOfOD, 
                        props.typeOfContract, 
                        props.infoblocks, 
                        props.er, 
                        props.legalTech, 
                        props.freeBlocks, 
                        props.consalting)
                }}
                className={complect.className}
                number={index}
                type="button" >{complect.name}
                <div className="ellipseWrapper">
                    <img className="ellipse" src={props.ellipse[index]} alt=""></img>
                </div>
            </Button>)
    })

    return (
        buttons
    )
}

export default ComplectButtons