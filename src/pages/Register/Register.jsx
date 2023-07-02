import { useNavigate } from 'react-router-dom';
import './Register.css';
import Form from '../../components/Form/Form';
import { useMediaQuery } from '@mui/material';
import logo from '../../assets/logo2.svg';

const Register = () => {
  const navigate = useNavigate();

  const isMobileScreens = useMediaQuery('(max-width: 540px)');

  return (
    <div className="register">
      <div className="register__header">
        <div className="register__navbar">
          <h1 onClick={() => navigate('/')}>
            {isMobileScreens ? <img src={logo} alt="logo" /> : 'BLOOM'}
          </h1>
          <button onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
      <div className="register__body">
        <Form register />
      </div>
    </div>
  );
};

export default Register;
