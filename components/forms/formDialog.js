import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ControlledRadioButtonsGroup from './radioButtons';

const useStyles = makeStyles({
    dialog: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '10px 30px',
        color: 'rgb(41, 39, 39)',

    },
    title: {
        fontSize: '20px',
        fontWeight: 700,
        textAlign: 'center',
        color: 'rgb(41, 39, 39)',
    },
    subTitle: {
        fontSize: '14px',
        color: 'black',
        margin: '0 0 10px 0',
    },
    buttonActions: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px 15px 20px 25px',
    },
    buttonContinue: {
        fontSize: '14px',
        color: 'white',
        backgroundColor: '#1d9523',
        padding: '2px 25px',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: '#1d9523',
        }

    },
    buttonBack: {
        fontSize: '14px',
        color: 'rgb(41, 39, 39)',
        padding: '2px 42px',
        border: '1px solid #d7d3d3',
        textTransform: 'capitalize',
        '&:hover': {
            border: '1px solid #d7d3d3',
        }
    },

})

export default function FormDialog({ open, onClose, value, onHandleChange, onHandleModalNext }) {

    const classes = useStyles()
    return (


        <Dialog open={open} onClose={onClose} >
            <div className={classes.dialog}>
                <DialogTitle >
                    <div className={classes.title}>Type of Client</div>
                    <div className={classes.subTitle}>
                        Choose the type of client you want to add.
                    </div>
                </DialogTitle>
                <DialogContent >

                    <ControlledRadioButtonsGroup value={value} onHandleChange={onHandleChange} />
                </DialogContent>
                <DialogActions className={classes.buttonActions}>
                    <Button variant="outlined" onClick={onClose} className={classes.buttonBack}>Back</Button>
                    <Button onClick={onHandleModalNext} className={classes.buttonContinue}>Continue</Button>
                </DialogActions>
            </div>
        </Dialog>

    );
}