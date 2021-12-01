import { useEffect, useState } from "react"
import { connect } from "react-redux";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { v4 as uuidv4 } from 'uuid';

import { fetchUsers, addClient } from "../redux/actions/userAction";
import { server } from "../config";
import EnhancedTable from "../components/table";
import FormDialog from "../components/forms/formDialog";
import FormStepper from "../components/forms/steppers";
import PermanentDrawer from "../components/drawer"

const drawerWidth = 350;
const Home = (props) => {
  const contacts = {
    company: '',
    entity: '',
    email: '',
    phone: '',
    address: '',
    code: '',
    city: '',
    comments: '',

  }

  const details = {

    name: '',
    occupation: '',
    email: '',
    phone: '',
    telephone: '',

  }

  const services = {
    employee: '',
    comments: '',

  }

  const [open, setOpen] = useState(false);
  const [radioValue, setRadioValue] = useState('company');
  const [continueForm, setContinueForm] = useState(false);
  const [detailsValue, setDetailsValue] = useState(details);
  const [contactValue, setContactValue] = useState(contacts);
  const [serviceValue, setServiceValue] = useState([]);
  const [serviceDetails, setServiceDetails] = useState(services);

  useEffect(() => {
    props.fetchUsers(`${server}/api/users`)
  }, [])

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleDetailsChange = (event) => {
    const { name, value } = event.target;
    setDetailsValue({ ...detailsValue, [name]: value });
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactValue({ ...contactValue, [name]: value });
  };

  const handleServiceDetailsChange = (event) => {
    const { name, value } = event.target;
    setServiceDetails({ ...serviceDetails, [name]: value });
  };

  const handleServiceChange = (event) => {
    const {
      target: { value },
    } = event;
    setServiceValue(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setContinueForm(false)
  };

  const handleModalNext = () => {
    setOpen(false);
    setContinueForm(true)
  };

  //Submit method
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addClient(`${server}/api/users`, {
      id: uuidv4().slice(0, 5),
      client_type: radioValue,
      company_name: contactValue.company,
      legal_entity: contactValue.entity,
      email: contactValue.email,
      phone: contactValue.phone,
      address: contactValue.address,
      code: contactValue.code,
      city: contactValue.city,
      comments: contactValue.comments,
      contact_details: detailsValue,
      service_details: {
        services: serviceValue,
        comments: serviceDetails.comments,
        assigned_employee: serviceDetails.employee,
      }
    })
    clearFormData();
  };

  const clearFormData = () => {
    setRadioValue('');
    setServiceValue([])
    setDetailsValue({
      name: '',
      occupation: '',
      email: '',
      phone: '',
      telephone: '',
    })
    setContactValue({
      company: '',
      entity: '',
      email: '',
      phone: '',
      address: '',
      code: '',
      city: '',
      comments: '',
    });
    setServiceDetails({
      employee: '',
      comments: '',
    })

  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      </AppBar>
      <PermanentDrawer drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >

        {!continueForm &&
          <Grid style={{ display: 'flex', }}>
            <Typography
              sx={{ flex: '1 1 50%' }}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              User List
            </Typography>
            <Button variant="outlined" onClick={handleClickOpen}>
              + New User
            </Button>
          </Grid>
        }

        <FormDialog open={open} onClose={handleClose} value={radioValue} onHandleChange={handleChange} onHandleModalNext={handleModalNext} />
        {
          continueForm ?

            < FormStepper
              value={radioValue}
              detailsValue={detailsValue}
              contactValue={contactValue}
              onHandleDetailsChange={handleDetailsChange}
              onHandleContactChange={handleContactChange}
              serviceDetails={serviceDetails}
              serviceValue={serviceValue}
              onHandleServiceChange={handleServiceChange}
              onHandleServiceDetailsChange={handleServiceDetailsChange}
              onSubmit={handleSubmit}
            />

            :
            <EnhancedTable users={props.users} />

        }

      </Box>
    </Box>
  );
}


const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = {
  fetchUsers, addClient
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
