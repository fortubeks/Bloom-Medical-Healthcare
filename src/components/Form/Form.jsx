import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import './Form.css';
import { useNavigate } from 'react-router-dom';

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
  phone: yup.string().required('required'),
});

const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('required'),
  password: yup
    .string()
    .required('required')
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

const Form = () => {
  const [pageType, setPageType] = useState('register');

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLogin = pageType === 'login';
  const isRegister = pageType === 'register';

  const handleFormSubmit = () => {};

  return (
    <div className="form">
      <h4>Welcome to BLOOM</h4>
      <h5>{isLogin ? 'Sign in to demo' : 'Sign up for free Demo'}</h5>
      <button>{isLogin ? 'Sign in with Google' : 'Sign up with Google'}</button>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? loginSchema : registerSchema}
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
            <div>
              {isRegister && (
                <>
                  <input
                    label="Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    error={Boolean(touched.name) && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                  <input
                    label="Client Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.clientName}
                    name="clientName"
                    error={
                      Boolean(touched.clientName) && Boolean(errors.clientName)
                    }
                    helperText={touched.clientName && errors.clientName}
                  />
                  <input
                    label="Phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    name="phone"
                    error={Boolean(touched.phone) && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                </>
              )}
              <input
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <input
                label="Password"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </div>

            {/* BUTTONS */}
            <div>
              <button type="submit">{isLogin ? 'Sign In' : 'Book Demo'}</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
