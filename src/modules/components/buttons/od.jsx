
import "./buttons.css"
import * as React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, InputLabel, MenuItem, ThemeProvider } from "@material-ui/core";
import "../../../App.css"
import { theme } from "../../../styles/theme";
import { useTheme } from "@material-ui/styles";



const ODButtons = (props) => {
  const theme = useTheme()

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(props.currentOd);
  };

  let ods = []


  props.allOds.forEach((name, index) => {

    ods[index] =
      <MenuItem
        key={`item-od-${index}`} >
        <Button
          key={`btn-od-${index}`}
          style={props.style}
          onClick={() => {
            props.odChange(
              name,
              props.allOds,
              props.currentComplect,
              props.currentComplect.number,
              index,
              props.typeOfContract)
          }}
          className="btn__od"
          as="button">{name}
        </Button>
      </MenuItem>

  })





  return (

    //   <FormControl style={props.style} className={props.odClassName} fullWidth>
    //   <InputLabel className={props.odClassName} id="demo-simple-select-autowidth-label">{props.currentComplect ? props.currentOd : 'Количество доступов'}</InputLabel>
    //   <Select
    //     color="primary"
    //     // variant="main"
    //     className="select"
    //   // onChange={ handleChange}
    //   >

    //     {ods}

    //   </Select>
    // </FormControl >

    <FormControl color="primary" className="formControlOd">
      <InputLabel id="demo-simple-select-autowidth-label">
        {props.currentComplect ? props.currentOd : 'Количество доступов'}
      </InputLabel>
      <Select
        sx={{
          display: 'flex',
          width: '90%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 0,
          p: 3,
        }}
        // value={age}
        // variant="standart"
        className="select"
        onChange={handleChange}
      >

        {ods}

      </Select>
    </FormControl >

  );
}

export default ODButtons