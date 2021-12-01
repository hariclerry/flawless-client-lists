import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';

const useStyles = makeStyles({
    dialogContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    card: {
        margin: '10px 0',
        padding: '1px',
        borderRadius: '10px',
    },
    descriptionContent: {
        color: 'gray',
        fontSize: '12px',
        margin: '-10px 0 0 35px',
    },
    radioLabel: {
        fontSize: '12px !important',
    }
})
export default function ControlledRadioButtonsGroup({ value, onHandleChange }) {

    const classes = useStyles()

    return (
        <FormControl component="fieldset">
            <RadioGroup
                className={classes.dialogContent}
                aria-label="client"
                name="controlled-radio-buttons-group"
                value={value}

                defaultValue="company"

            >
                <Card variant="outlined" sx={{ minWidth: 275 }} className={classes.card}>
                    <CardContent>
                        <FormControlLabel value="company" control={<Radio sx={{
                            '&.Mui-checked': {
                                color: green[700],
                            },
                        }}
                            onChange={onHandleChange}
                        />} label="Company" className={classes.radioLabel} />
                        <Typography
                            component="p"
                            className={classes.descriptionContent}
                        >
                            Account for companies
                        </Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined" sx={{ minWidth: 275 }} className={classes.card}>
                    <CardContent>
                        <FormControlLabel value="individual" control={<Radio sx={{
                            '&.Mui-checked': {
                                color: green[600],
                            },
                        }}
                            onChange={onHandleChange} />} label="Individual" className={classes.radioLabel} />
                        <Typography
                            className={classes.descriptionContent}
                            component="p"
                        >
                            Account for individual
                        </Typography>
                    </CardContent>
                </Card>


            </RadioGroup>
        </FormControl>
    );
}