import { useNavigate } from 'react-router-dom';
import './Register.css';
import Form from '../../components/Form/Form';

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="register">
      <div className="register__navbar">
        <h1>BLOOM</h1>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
      <div className="register__body">
        <Form />
      </div>
    </div>
  );
};

export default Register;
