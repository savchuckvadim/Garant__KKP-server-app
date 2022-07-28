
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "../buttons.css"
import "./modal.css"
import "../../header/header.css"
import logo from '../../header/img/logo-icon-solid-horizontal.svg'

import "../../complect/complect.css"
import ComplectButtonsContainer from '../buttons-Container'
import ODButtonsContainer from '../od-Container'
import ResetButtonContainer from '../reset-Container'


const ModalButton = (props) => {


  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  let ref = React.createRef()

  return (
    <>
      <Button ref={ref} style={props.styleBtnModal} variant="otline" onClick={() => { props.handleShow(ref) }} className={'btn__modal'}>
        {props.title}

      </Button>

      <Modal
        show={props.show}
        onHide={() => { props.handleClose(ref) }}
        size="fullscreen"


      >
        {/* <Modal.Header closeButton style={props.styleTheme}>
          <div className="header__container">
            <img className="header__logo" src={logo} alt="logo"></img>

          </div>
        </Modal.Header> */}
        <Modal.Body className="body" style={props.styleTheme}>

          {/* < ComplectModalButtons state={props.state} dispatch={props.dispatch}/>

          < ODModalButtons state={props.state} dispatch={props.dispatch}/>

          <ResetButton state={props.state} dispatch={props.dispatch} /> */}
          <div className={'container__small'}>

            <ComplectButtonsContainer />
            <ODButtonsContainer />
            <ResetButtonContainer />
          </div>

        </Modal.Body>
        <Modal.Footer style={props.styleTheme}>
          <Button variant="secondary" onClick={() => { props.handleClose(ref) }}>
           закрыть
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Сохранить
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalButton

