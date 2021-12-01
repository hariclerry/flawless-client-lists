import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const entity = [
    {
        value: 'yes',
        label: 'Yes',
    },
    {
        value: 'no',
        label: 'No',
    },
];

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-evenly',
    },
    leftForm: {
        width: '80%',
    },
    rightForm: {
        width: '45%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    contactForm: {
        '&.MuiTextField-root': { m: 1, width: '45% !important' }
    },

    contactFormThree: {
        '&.MuiTextField-root': { m: 1, width: '29.4% !important' }
    },
    contactFormTextArea: {
        '&.MuiTextField-root': { m: 1, width: '100% !important' }
    },
    buttonAddContact: {
        fontSize: '14px',
        margin: '25px 0 0 10px',
        color: '#1d9523',
        padding: '2px 42px',
        border: '1px solid #1d9523',
        borderRadius: '8px',
        textTransform: 'capitalize',
        '&:hover': {
            border: '1px solid #d7d3d3',
        }
    },
    descriptionContent: {
        color: 'dark gray',
        fontSize: '14px',
        margin: '10px 0 0 6px',
    },
    descriptionContentMain: {
        color: '#1d9523',
        fontSize: '14px',
        margin: '10px 0 0 6px',
        fontWeight: 700,
    },
})


export default function ContactDetailsForm({ detailsValue, contactValue, onHandleDetailsChange, onHandleContactChange }) {

    const [value, setValue] = React.useState('');
    const classes = useStyles()

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Paper sx={{ my: { xs: 2 }, p: { xs: 1 } }}>

            <h3>Add Clients details</h3>
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

                        <TextField
                            className={classes.contactForm}
                            id="outlined-company"
                            label="Company Name"
                            // id="outlined-textarea"
                            value={contactValue.company}
                            onChange={onHandleContactChange}
                            placeholder="Company Name"
                            name='company'
                            multiline
                            size="small"
                        />
                        <TextField
                            className={classes.contactForm}
                            id="outlined-select-entity"
                            select
                            label="Legal Entity"
                            value={contactValue.entity}
                            placeholder="Legal Entity"
                            onChange={onHandleContactChange}
                            name='entity'
                            size="small"
                        >
                            {entity.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            className={classes.contactForm}
                            id="outlined-general-email"
                            label="General Email"
                            multiline
                            maxRows={4}
                            value={contactValue.email}
                            onChange={onHandleContactChange}
                            placeholder="General Email"
                            type="email"
                            size="small"
                            name='email'
                        />

                        <TextField
                            className={classes.contactForm}
                            id="outlined-general-phone-number"
                            label="General Phone number"
                            placeholder="Phone number"
                            multiline
                            value={contactValue.phone}
                            onChange={onHandleContactChange}
                            type="phone"
                            size="small"
                            name='phone'
                        />
                    </div>
                    <div>
                        <TextField
                            className={classes.contactFormThree}
                            id="outlined-multiline-flex"
                            label="Address"
                            multiline
                            value={contactValue.address}
                            onChange={onHandleContactChange}
                            size="small"
                            name='address'
                        />
                        <TextField
                            className={classes.contactFormThree}
                            id="outlined-multiline-f"
                            label="Post code"
                            multiline
                            value={contactValue.code}
                            onChange={onHandleContactChange}
                            size="small"
                            name='code'
                        />
                        <TextField
                            className={classes.contactFormThree}
                            id="outlined-multiline-f"
                            label="City"
                            multiline
                            value={contactValue.city}
                            onChange={onHandleContactChange}
                            size="small"
                            name='city'
                        />
                    </div>
                    <div>

                        <Typography
                            component="p"
                            className={classes.descriptionContentMain}
                        >
                            Contact details
                        </Typography>
                        <Typography
                            component="p"
                            className={classes.descriptionContent}
                        >
                            Contact 1 - Company representative
                        </Typography>


                        <div>
                            <TextField
                                className={classes.contactForm}
                                id="outlined-name"
                                label="Name"
                                multiline
                                // maxRows={4}
                                value={detailsValue.name}
                                onChange={onHandleDetailsChange}
                                size="small"
                                placeholder="Name"
                                name='name'
                            />
                            <TextField
                                className={classes.contactForm}
                                id="outlined-occupation"
                                label="Occupation"
                                multiline
                                // maxRows={4}
                                value={detailsValue.occupation}
                                onChange={onHandleDetailsChange}
                                size="small"
                                name='occupation'
                            />
                        </div>
                        <div>
                            <TextField
                                className={classes.contactFormThree}
                                id="outlined-email"
                                label="Email"
                                multiline
                                maxRows={4}
                                value={detailsValue.email}
                                onChange={onHandleDetailsChange}
                                type="email"
                                size="small"
                                name='email'
                            />
                            <TextField
                                className={classes.onHandleDetailsChange}
                                id="outlined-phone"
                                label="Phone number"
                                multiline
                                // maxRows={4}
                                value={detailsValue.phone}
                                type="phone"
                                onChange={onHandleDetailsChange}
                                size="small"
                                name='phone'
                            />
                            <TextField
                                className={classes.contactFormThree}
                                id="outlined-telephone"
                                label="Telephone number"
                                multiline
                                value={detailsValue.telephone}
                                type="phone"
                                onChange={onHandleDetailsChange}
                                size="small"
                                name='telephone'
                            />
                        </div>
                    </div>
                    <div>

                        <Typography
                            component="p"
                            className={classes.descriptionContent}
                        >
                            Contact 2 - Optional(Not functional)
                        </Typography>
                        <div>
                            <TextField
                                className={classes.contactForm}
                                id="outlined-multiline-flex"
                                label="Name"
                                multiline
                                maxRows={4}
                                value='optional'
                                onChange={handleChange}
                                size="small"
                            />
                            <TextField
                                className={classes.contactForm}
                                id="outlined-multiline-f"
                                label="Occupation"
                                multiline
                                maxRows={4}
                                value='optional'
                                onChange={handleChange}
                                size="small"
                            />
                        </div>
                        <div>
                            <TextField
                                className={classes.contactFormThree}
                                id="outlined-multiline-flex"
                                label="Email"
                                multiline
                                maxRows={4}
                                value='optional'
                                onChange={handleChange}
                                size="small"
                            />
                            <TextField
                                className={classes.contactFormThree}
                                id="outlined-multiline-f"
                                label="Phone number"
                                multiline
                                maxRows={4}
                                value='optional'
                                onChange={handleChange}
                                size="small"
                            />
                            <TextField
                                className={classes.contactFormThree}
                                id="outlined-multiline-f"
                                label="Telephone number"
                                multiline
                                maxRows={4}
                                value='optional'
                                onChange={handleChange}
                                size="small"
                            />
                            <Button variant="outlined" className={classes.buttonAddContact}>+ Add Contact</Button>
                        </div>
                    </div>

                </div>
                <div className={classes.rightForm}>
                    <TextField
                        className={classes.contactFormTextArea}
                        id="outlined-multiline"
                        name='comments'
                        value={contactValue.comments}
                        onChange={onHandleContactChange}
                        multiline
                        rows={14}
                        placeholder="Comments about the client"
                    />
                </div>

            </Box>
        </Paper>

    );
}