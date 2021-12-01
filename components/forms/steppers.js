import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Check from '@mui/icons-material/Check';
import { makeStyles } from '@mui/styles';

import ContactDetailsForm from './contactForm';
import ServiceForm from './serviceForm';
import { styled } from '@mui/material/styles';


const steps = ['Type of Client', 'Contact details', 'Service details'];

const useStyles = makeStyles({

    buttonActions: {
        display: 'flex',
        justifyContent: 'end',
        margin: '15px 0px 0px 25px',
    },
    buttonContinue: {
        fontSize: '14px',
        color: 'white',
        backgroundColor: '#1d9523',
        padding: '2px 25px',
        textTransform: 'capitalize',
        borderRadius: '8px',
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
        borderRadius: '8px',
        marginRight: '15px',
        '&:hover': {
            border: '1px solid #d7d3d3',
        }
    },
})

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#1d9523',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#1d9523',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: '#1d9523',
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#1d9523',
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

function QontoStepIcon(props) {
    const { active, completed, className, activeStep } = props;
    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {(completed || active === 'client') ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

export default function FormStepper({ serviceValue,
    detailsValue,
    value,
    contactValue,
    onHandleDetailsChange,
    onHandleContactChange,
    onHandleServiceChange,
    onHandleServiceDetailsChange,
    serviceDetails,
    onSubmit }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const classes = useStyles()

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };


    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <ContactDetailsForm
                    detailsValue={detailsValue}
                    contactValue={contactValue}
                    onHandleDetailsChange={onHandleDetailsChange}
                    onHandleContactChange={onHandleContactChange} />;
            case 1:
                return <ContactDetailsForm
                    detailsValue={detailsValue}
                    contactValue={contactValue}
                    onHandleDetailsChange={onHandleDetailsChange}
                    onHandleContactChange={onHandleContactChange} />;
            case 2:
                return <ServiceForm
                    serviceDetails={serviceDetails}
                    serviceValue={serviceValue}
                    onHandleServiceChange={onHandleServiceChange}
                    onHandleServiceDetailsChange={onHandleServiceDetailsChange} />;
            default:
                throw new Error('Unknown step');
        }
    }
    return (
        <div >
            <Typography component="h1" variant="h4" align="left" style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>
                Create a new company client
            </Typography>
            <Typography component="h1" variant="h4" align="left" style={{ fontSize: '12px', color: '#4e4c4c', margin: '8px', textTransform: 'capitalize', }}>
                {value}
            </Typography>
            <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <React.Fragment>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                            Thank you for your order.
                        </Typography>
                        <Typography variant="subtitle1">
                            Your order number is #2001539. We have emailed your order
                            confirmation, and will send you an update when your order has
                            shipped.
                        </Typography>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {getStepContent(activeStep)}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {activeStep !== 0 && (
                                <Button
                                    variant="outlined"
                                    className={classes.buttonBack}
                                    onClick={handleBack}
                                    sx={{ mt: 3, ml: 1 }}>
                                    Back
                                </Button>
                            )}

                            <Button
                                className={classes.buttonContinue}
                                variant="contained"
                                onClick={activeStep === steps.length - 1 ? onSubmit : handleNext}
                                sx={{ mt: 3, ml: 1 }}
                            >
                                {activeStep === steps.length - 1 ? 'Submit' : 'Continue'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </React.Fragment>
        </div>

    );
}