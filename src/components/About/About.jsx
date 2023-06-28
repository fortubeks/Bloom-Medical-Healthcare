import './About.css';
import hero from '../../assets/hero.png';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about" id="about">
      <div className="about__description">
        <h1>
          The <span>BLOOM</span> <br /> Way
        </h1>
        <div className="about__hero__mobile">
          <img src={hero} alt="hero" />
        </div>
        <p>
          Access all important documents in one place, Run your business from
          anywhere in the world, Manage all income and expenditure in one place,
          Connect with the broader medical community.
        </p>
        <button onClick={() => navigate('/register')}>Try for free</button>
      </div>
      <div className="about__hero">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default About;
