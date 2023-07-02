import { useMediaQuery } from '@mui/material';
import logo from '../../assets/logo2.svg';
import { useNavigate } from 'react-router-dom';
import { TextField, styled } from '@mui/material';
import './ForgotPassword.css';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useEffect } from 'react';

const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Enter registered email address'),
});

const initialValuesForgotPassword = {
  email: '',
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

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (values, { resetForm }) => {
    resetForm();
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the pricing page
  }, []);

  const isMobileScreens = useMediaQuery('(max-width: 540px)');
  return (
    <div className="forgotPassword">
      <div className="forgotPassword__header">
        <div className="forgotPassword__navbar">
          <h1 onClick={() => navigate('/')}>
            {isMobileScreens ? <img src={logo} alt="logo" /> : 'BLOOM'}
          </h1>
          <button onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
      <div className="forgotPassword__body">
        <div className="forgotPassword__form">
          <h4>
            Welcome to <span>BLOOM</span>
          </h4>
          <h5>Forgot Password</h5>

          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValuesForgotPassword}
            validationSchema={forgotPasswordSchema}
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
              <Form onSubmit={handleSubmit}>
                <div className="form__inputs">
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
                </div>

                <div className="formForgotPassword__button">
                  <button type="submit" disabled={!isValid || isSubmitting}>
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
