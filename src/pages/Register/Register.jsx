import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="register">
      <div className="register__navbar">
        <h1>BLOOM</h1>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
      <div className="register__body">
        <div className="register__body__card">
          <h4>Welcome to BLOOM</h4>
          <h5>Sign up for free Demo</h5>
          <button>Sign up with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
