
import "../buttons.css"
import "./modal.css"
import "../../complect/complect.css"

import * as React from 'react';

import { AppBar, Button, Dialog, IconButton, Toolbar, Slide, Typography, List, ListItem, ListItemText, Divider } from "@material-ui/core"
import Header from "../../header/header"
import DealContainer from "../../deal/deal-Container"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ResultModalButton = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    props.handleShow(ref)
  };

  const handleClose = () => {
    props.handleClose(ref)
  };
  let ref = React.createRef()
  return (
    <div>
      <Button ref={ref} style={props.styleBtnModal}  onClick={handleClickOpen} className={'btn__result__modal'}>
        {props.title}

      </Button>
      <Dialog
        fullScreen
        open={props.show}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {/* <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="end"
           
              onClick={handleClose}
              aria-label="close"
            >
            
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">

            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar> */}
        <List>
         
          <DealContainer/>
        </List>
      </Dialog>
    </div>
  );
}


export default ResultModalButton

