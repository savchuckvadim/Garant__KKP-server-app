import { Box, TextField } from '@material-ui/core';
import * as React from 'react';
import "../prepaid.css"

const DealPush = (props) => {

    return (
        <div className="prepaid__container">
            <TextField fullWidth id="push-deal-name" label="Название Сделки" variant="outlined" />
        </div>
    )
}



export default DealPush