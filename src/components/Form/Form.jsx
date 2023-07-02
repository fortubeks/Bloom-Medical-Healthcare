// import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import './Form.css';
// import { useNavigate } from 'react-router-dom';
import google from '../../assets/google.svg';
import { TextField, styled } from '@mui/material';

const registerSchema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  clientName: yup.string().required('Client name is required'),
  email: yup
    .string()
    .email('Invalid email')
    .required('Please enter your email address'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(
      8,
      'Your password is too short. Please enter a minimum of 8 characters'
    ),
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
  clientName: '',
  email: '',
  password: '',
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
  // const user = useSelector((state) => state.user);

  // const dispatch = useDispatch();

  // const navigate = useNavigate();

  const handleFormSubmit = (onSubmitProps) => {
    onSubmitProps.resetForm();
  };

  return (
    <div className="form">
      <h4>
        Welcome to <span>BLOOM</span>
      </h4>
      <h5>{login ? 'Sign in to demo' : 'Sign up for free Demo'}</h5>
      <button>
        <img src={google} alt="google icon" />
        {login ? 'Sign in with Google' : 'Sign up with Google'}
      </button>

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
                  <label htmlFor="clientName" style={{ fontSize: '1.2rem' }}>
                    Client Name
                  </label>
                  <CustomTextField
                    label="Enter client name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.clientName}
                    name="clientName"
                    error={
                      Boolean(touched.clientName) && Boolean(errors.clientName)
                    }
                    helperText={touched.clientName && errors.clientName}
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
              <label htmlFor="password" style={{ fontSize: '1.2rem' }}>
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
              />
            </div>

            {/* BUTTONS */}
            <div className="form__button">
              <button type="submit">{login ? 'Sign In' : 'Book Demo'}</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
