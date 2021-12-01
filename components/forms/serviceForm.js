import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';

const assignees = [
    {
        value: 'Miriam Wagner',
        label: 'Miriam Wagner',
    },
    {
        value: 'Omar Alexander',
        label: 'Omar Alexander',
    },
    {
        value: 'Carlos Abbott',
        label: 'Carlos Abbott',
    },
];

const services = [
    'Fiscal unity VAT',
    'KOR administration',
    'Payroll administration',
    'administration',
    'VAT declaration',
    'Fiscal unity VPB',
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100%',
    },
    leftForm: {
        width: '100%',
    },
    contactForm: {
        '&.MuiTextField-root': { m: 1, width: '40% !important' }
    },

    contactFormThree: {
        '&.MuiTextField-root': { m: 1, width: '35% !important' }
    },
    contactFormTextArea: {
        '&.MuiTextField-root': { marginLeft: '30%', width: '45% !important' }
    },
    descriptionContent: {
        color: 'dark gray',
        fontSize: '14px',
        margin: '10px 0 0 6px',
    },
    descriptionContentMain: {
        color: '#1d9523',
        fontSize: '14px',
        margin: '140px 0 0 6px',
        fontWeight: 700,
    },

    bottomContent: {
        display: 'flex',
        justifyContent: 'flex-end'

    },
    card: {
        margin: '10px 0',
        padding: '1px',
        borderRadius: '10px',
    },
})

export default function ServiceForm({ serviceDetails, serviceValue, onHandleServiceChange, onHandleServiceDetailsChange }) {
    const classes = useStyles()

    return (
        <Paper sx={{ my: { xs: 2 }, p: { xs: 1 } }}>
            <h3>Add Service details</h3>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '20ch' },
                }}
                noValidate
                autoComplete="off"
                className={classes.root}
            >

                <div className={classes.leftForm}>
                    <div>
                        <FormControl sx={{ m: 1, width: '58%' }} size="small">
                            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                            <Select

                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple
                                onChange={onHandleServiceChange}
                                value={serviceValue}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {services.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={serviceValue.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            className={classes.contactFormThree}
                            id="outlined-assigned-employee"
                            select
                            label="Assigned employee"
                            placeholder="Assigned employee"
                            onChange={onHandleServiceDetailsChange}
                            value={serviceDetails.employee}
                            size="small"
                            name='employee'
                        >
                            {assignees.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </div>
                    <div className={classes.bottomContent}>
                        {(serviceValue && serviceValue.length > 0) &&
                            (<div style={{ alignSelf: "flex-end" }}>
                                <Typography
                                    component="p"
                                    className={classes.descriptionContentMain}
                                >
                                    Services for the client
                                </Typography>
                                {serviceValue.map((item, idx) => (
                                    <Card variant="outlined" sx={{ minWidth: 200 }} className={classes.card} key={idx + 44}>
                                        <CardContent>
                                            {item}
                                        </CardContent>
                                    </Card>
                                ))

                                }
                            </div>)
                        }
                        <TextField
                            className={classes.contactFormTextArea}
                            id="outlined-multiline-static"
                            onChange={onHandleServiceDetailsChange}
                            value={serviceDetails.comments}
                            multiline
                            rows={12}
                            placeholder="Comments about the client"
                            name="comments"
                        />
                    </div>

                </div>

            </Box>
        </Paper>

    );
}