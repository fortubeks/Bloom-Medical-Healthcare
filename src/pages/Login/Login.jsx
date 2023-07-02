import './Login.css';
import { useMediaQuery } from '@mui/material';
import logo from '../../assets/logo2.svg';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/Form/Form';

const Login = () => {
  const navigate = useNavigate();

  const isMobileScreens = useMediaQuery('(max-width: 540px)');
  return (
    <div className="login">
      <div className="login__header">
        <div className="login__navbar">
          <h1 onClick={() => navigate('/')}>
            {isMobileScreens ? <img src={logo} alt="logo" /> : 'BLOOM'}
          </h1>
          <button onClick={() => navigate('/register')}>Register</button>
        </div>
      </div>
      <div className="login__body">
        <Form login />
      </div>
    </div>
  );
};

export default Login;
