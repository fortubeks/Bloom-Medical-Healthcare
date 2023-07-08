import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import './Form.css';
import { useNavigate } from 'react-router-dom';
// import google from '../../assets/google.svg';
import { TextField, styled, Modal, Box } from '@mui/material';
import { setUser } from '../../state/userSlice';
import { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const registerSchema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  clinic_name: yup.string().required('Client name is required'),
  email: yup
    .string()
    .email('Invalid email')
    .required('Please enter your email address'),
  // password: yup
  //   .string()
  //   .required('Please enter your password')
  //   .min(
  //     8,
  //     'Your password is too short. Please enter a minimum of 8 characters'
  //   ),
  //   confirmPassword: yup
  //     .string()
  //     .oneOf([yup.ref('password'), ''], 'Passwords must match')
  //     .required('Please re-enter your password'),
  phone: yup.string().required('Enter phone number'),
});

const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Enter email address'),
  password: yup
    .string()
    .required('Enter password')
    .min(
      8,
      'Your password is too short. Please enter a minimum of 8 characters'
    ),
});

const initialValuesRegister = {
  name: '', //property names here has to align with the 'name' property in the input or in our case input tags
  clinic_name: '',
  email: '',
  // password: '',
  //   confirmPassword: '',
  phone: '',
};

const initialValuesLogin = {
  email: '',
  password: '',
};

const CustomTextField = styled(TextField)({
  '& .MuiInputLabel-root': {
    fontSize: '1.4rem', // Custom label font size
  },
  '& .MuiInputBase-input': {
    backgroundColor: '#F7F7F7', // Custom text input background color
    fontSize: '1.4rem',
  },
  '& .MuiFormHelperText-root': {
    fontSize: '1.2rem', // Custom helperText font size
  },
});

const Form = ({ register, login }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const registerUser = async (values, onSubmitProps) => {
    const savedUserResponse = await fetch(process.env.REACT_APP_SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    const savedUser = await savedUserResponse.json();

    onSubmitProps.resetForm();

    if (savedUser) {
      dispatch(setUser(savedUser));
      setOpen(true);
    }
  };

  const loginUser = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch(process.env.REACT_APP_SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    const loggedInUser = await loggedInResponse.json();

    onSubmitProps.resetForm();

    if (loggedInUser) {
      dispatch(setUser(loggedInUser));
      setOpen(true);
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (register) await registerUser(values, onSubmitProps);
    if (login) await loginUser(values, onSubmitProps);
  };

  const style = {
    position: 'absolute',
    top: '50vh',
    left: '50vw',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    bgcolor: '#a54de4',
    border: '1px solid #a54de4 ',
    borderRadius: '10px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    p: 3,
  };

  return (
    <div className="form">
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          navigate('/');
        }}
      >
        <Box sx={style}>
          <center>
            <CheckCircleOutlineIcon
              sx={{ width: '3rem', height: '3rem', color: 'white' }}
            />
            <h1
              style={{
                fontSize: '1.6rem',
                fontWeight: '500',
                marginBottom: '1rem',
                color: 'white',
              }}
            >
              Registration successful!
            </h1>
            <h1
              style={{
                fontSize: '1.6rem',
                fontWeight: '500',
                marginBottom: '1rem',
                color: 'white',
              }}
            >
              Our team will contact you soon for account activation
            </h1>
            <button
              onClick={() => {
                setOpen(false);
                navigate('/');
              }}
              style={{
                padding: '1rem 2rem',
                color: 'red',
                backgroundColor: 'white',
                borderRadius: '3rem',
                border: 'none',
                marginTop: '1.2rem',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              Close Modal
            </button>
          </center>
        </Box>
      </Modal>
      <h4>
        Welcome to <span>BLOOM</span>
      </h4>
      <h5>{login ? 'Sign in to demo' : 'Sign up for free Demo'}</h5>
      {/* <button>
        <img src={google} alt="google icon" />
        {login ? 'Sign in with Google' : 'Sign up with Google'}
      </button> */}

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={login ? initialValuesLogin : initialValuesRegister}
        validationSchema={login ? loginSchema : registerSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form__inputs">
              {register && (
                <>
                  <label htmlFor="name" style={{ fontSize: '1.2rem' }}>
                    Name
                  </label>
                  <CustomTextField
                    label="Enter full name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    error={Boolean(touched.name) && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    className="textField"
                    fullWidth
                  />
                  <label htmlFor="clinic_name" style={{ fontSize: '1.2rem' }}>
                    Client Name
                  </label>
                  <CustomTextField
                    label="Enter client name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.clinic_name}
                    name="clinic_name"
                    error={
                      Boolean(touched.clinic_name) &&
                      Boolean(errors.clinic_name)
                    }
                    helperText={touched.clinic_name && errors.clinic_name}
                    fullWidth
                  />
                  <label htmlFor="phone" style={{ fontSize: '1.2rem' }}>
                    Phone
                  </label>
                  <CustomTextField
                    label="Enter phone number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    name="phone"
                    error={Boolean(touched.phone) && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                    fullWidth
                  />
                </>
              )}
              <label htmlFor="email" style={{ fontSize: '1.2rem' }}>
                Email
              </label>
              <CustomTextField
                label="Enter email address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                fullWidth
              />
              {/* <label htmlFor="password" style={{ fontSize: '1.2rem' }}>
                Password
              </label>
              <CustomTextField
                label="Enter password"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={{
                  backgroundColor: '#F7F7F7',
                }}
                fullWidth
              /> */}

              {login && (
                <p onClick={() => navigate('/forgotPassword')}>
                  Forgot Password?
                </p>
              )}
            </div>

            {/* BUTTONS */}
            <div className="form__button">
              <button type="submit" disabled={!isValid || isSubmitting}>
                {login ? 'Sign In' : 'Book Demo'}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
